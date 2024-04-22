/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Pagination,
} from '@nextui-org/react'
import { columns, statusOptions } from './data'
import { useGetDefaultTransaction } from '../../../api/transactionApi'
import { differenceInDays, format } from 'date-fns'
import { TbMoneybag } from 'react-icons/tb'
import { MdAccessAlarm } from 'react-icons/md'

const INITIAL_VISIBLE_COLUMNS = [
  'id',
  'customer',
  'amount',
  'type',
  'property',
  'plan',
  'due date',
  'days overdue',
  'actions',
]

export default function DefaultTable() {
  const [filterValue, setFilterValue] = React.useState('')
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]))
  const [visibleColumns, setVisibleColumns] = React.useState(
    new Set(INITIAL_VISIBLE_COLUMNS)
  )
  const { data: showSummary } = useGetDefaultTransaction()

  const [statusFilter, setStatusFilter] = React.useState('all')
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: 'age',
    direction: 'ascending',
  })
  const [page, setPage] = React.useState(1)

  const pages = Math.ceil(showSummary?.length / rowsPerPage)

  const hasSearchFilter = Boolean(filterValue)

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === 'all') return columns

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    )
  }, [visibleColumns])

  const filteredItems = React.useMemo(() => {
    if (!showSummary) return [] // Return an empty array if showSummary is null

    let filteredUsers = [...showSummary]
    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.name.toLowerCase().includes(filterValue.toLowerCase())
      )
    }
    if (
      statusFilter !== 'all' &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.status)
      )
    }

    return filteredUsers
  }, [showSummary, filterValue, statusFilter])

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage
    const end = start + rowsPerPage

    return filteredItems.slice(start, end)
  }, [page, filteredItems, rowsPerPage])

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column]
      const second = b[sortDescriptor.column]
      const cmp = first < second ? -1 : first > second ? 1 : 0

      return sortDescriptor.direction === 'descending' ? -cmp : cmp
    })
  }, [sortDescriptor, items])

  const onRowsPerPageChange = React.useCallback((e) => {
    setRowsPerPage(Number(e.target.value))
    setPage(1)
  }, [])

  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value)
      setPage(1)
    } else {
      setFilterValue('')
    }
  }, [])

  const topContent = React.useMemo(() => {
    return (
      <div className='flex flex-col gap-4'>
        <div className='flex justify-between items-center'>
          <span className='text-default-400 text-[12px]'>
            Date on payments that should have been made but weren't and the
            customer who have paid
          </span>
          <span className='text-default-400 capitalize text-[12px]'>
            show all fields
          </span>
        </div>
      </div>
    )
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    showSummary?.length,
    hasSearchFilter,
  ])

  const bottomContent = React.useMemo(() => {
    return (
      <div className='py-2 px-2 flex justify-between items-center'>
        <Pagination
          showControls
          classNames={{
            cursor: 'bg-foreground text-background',
          }}
          color='default'
          isDisabled={hasSearchFilter}
          page={page}
          total={pages}
          variant='light'
          onChange={setPage}
        />
      </div>
    )
  }, [selectedKeys, items?.length, page, pages, hasSearchFilter])

  const classNames = React.useMemo(
    () => ({
      wrapper: ['max-h-[382px]', 'overflow-auto ', 'border-2', 'max-w-lg'],
      tr: ' border ',
      th: [
        'bg-transparent rounded-none bg-stone-200',
        'text-black text-[10px]',
        'border-divider',
        'last:rounded-none',
        'first:rounded-none',
      ],
      td: [
        'group-data-[first=true]:last:before:rounded-none',
        // middle
        'group-data-[middle=true]:before:rounded-none',
        // last
        'group-data-[last=true]:first:before:rounded-none',
        'group-data-[last=true]:last:before:rounded-none',
      ],
    }),
    []
  )

  return (
    <div className='mt-10 overflow-x-auto'>
      <Table
        isCompact
        removeWrapper
        aria-label='Example table with custom cells, pagination and sorting'
        bottomContent={showSummary?.length >= 5 ? bottomContent : null}
        bottomContentPlacement='outside'
        checkboxesProps={{
          classNames: {
            wrapper:
              'after:bg-foreground after:text-background text-background  border',
          },
        }}
        selectedKeys={selectedKeys}
        classNames={classNames}
        sortDescriptor={sortDescriptor}
        topContent={topContent}
        topContentPlacement='outside'
        onSelectionChange={setSelectedKeys}
        onSortChange={setSortDescriptor}
      >
        <TableHeader>
          {headerColumns.map((column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === 'actions' ? 'center' : 'start'}
              allowsSorting={column.sortable}
            >
              {column.name}
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody emptyContent={'No transaction found'}>
          {sortedItems?.map((item) => (
            <TableRow key={item.rrr}>
              <TableCell>{item.rrr?.slice(0, 4)}</TableCell>
              <TableCell>
                {item.customer?.firstName} {''} {item.customer?.lastName}
              </TableCell>
              <TableCell>N{item.amount.toLocaleString()}</TableCell>
              <TableCell className='capitalize'>
                {item.transactionType}
              </TableCell>
              <TableCell>
                {item.house?.address}
                {''}
                {item.house?.cityName}
                {','} {item.house?.stateName}
              </TableCell>
              <TableCell>{item.mortgagePlan?.name}</TableCell>

              <TableCell>{format(item?.dueDate, 'do MMMM yyyy')}</TableCell>
              <TableCell>
                {differenceInDays(new Date(), new Date(item.dueDate))} days
              </TableCell>
              <TableCell>
                <Dropdown className='bg-background border-1 border-default-200'>
                  <DropdownTrigger>
                    <Button isIconOnly radius='full' size='sm' variant='light'>
                      <svg
                        aria-hidden='true'
                        fill='none'
                        focusable='false'
                        height={24}
                        role='presentation'
                        viewBox='0 0 24 24'
                        width={24}
                      >
                        <path
                          d='M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
                          fill='#1E1E1E'
                          className='opacity-50'
                        />
                      </svg>
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu>
                    <DropdownItem>
                      <div className='flex gap-1 items-center'>
                        <MdAccessAlarm />
                        <div>Remind Customer</div>
                      </div>
                    </DropdownItem>
                    <DropdownItem>
                      <div className='flex gap-1 items-center'>
                        <TbMoneybag />
                        <div>View Repayment Schedule</div>
                      </div>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
