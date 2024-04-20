import React from 'react'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
} from '@nextui-org/react'
// import { PlusIcon } from './PlusIcon'
// import { VerticalDotsIcon } from './VerticalDotsIcon'
// import { SearchIcon } from './SearchIcon'
// import { ChevronDownIcon } from './ChevronDownIcon'
import { columns, users, statusOptions } from './data'
import { useGetSuccessFulTransaction } from '../../../api/profileApis'

const statusColorMap = {
  active: 'success',
  paused: 'danger',
  vacation: 'warning',
}

const INITIAL_VISIBLE_COLUMNS = [
  'id',
  'customer',
  'type',
  'giddaa',
  'your earnings',
  'total paid',
  'property',
  'plan',
  'payment date',
  'actions',
]

export default function SuccessTable() {
  const [filterValue, setFilterValue] = React.useState('')
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]))
  const [visibleColumns, setVisibleColumns] = React.useState(
    new Set(INITIAL_VISIBLE_COLUMNS)
  )
  const { data: showSummary } = useGetSuccessFulTransaction()

  console.log(showSummary, 'showSummary')

  const [statusFilter, setStatusFilter] = React.useState('all')
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: 'age',
    direction: 'ascending',
  })
  const [page, setPage] = React.useState(1)

  //   const pages = Math.ceil(users.length / rowsPerPage)
  const pages = Math.ceil(showSummary?.length / rowsPerPage)

  const hasSearchFilter = Boolean(filterValue)

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === 'all') return columns

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    )
  }, [visibleColumns])

  const filteredItems = React.useMemo(() => {
    // let filteredUsers = [...users]
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
    //   }, [users, filterValue, statusFilter])
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

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey]

    switch (columnKey) {
      case 'id':
        return (
          <User
            avatarProps={{ radius: 'full', size: 'sm', src: user?.avatar }}
            classNames={{
              description: 'text-default-500',
            }}
            description={user?.rrr}
            // name={cellValue}
          >
            {user?.rrr}
          </User>
        )
      case 'customer':
        return (
          <User
            avatarProps={{ radius: 'full', size: 'sm', src: user?.avatar }}
            classNames={{
              description: 'text-default-500',
            }}
            description={user?.email}
            name={cellValue}
          >
            {user?.email}
          </User>
        )
      case 'total paid':
        return (
          <User
            avatarProps={{ radius: 'full', size: 'sm', src: user?.avatar }}
            classNames={{
              description: 'text-default-500',
            }}
            description={user?.email}
            name={cellValue}
          >
            {user?.email}
          </User>
        )
      case 'your earnings':
        return (
          <User
            avatarProps={{ radius: 'full', size: 'sm', src: user?.avatar }}
            classNames={{
              description: 'text-default-500',
            }}
            description={user?.email}
            name={cellValue}
          >
            {user?.email}
          </User>
        )
      case 'giddaa':
        return (
          <User
            avatarProps={{ radius: 'full', size: 'sm', src: user?.avatar }}
            classNames={{
              description: 'text-default-500',
            }}
            description={user?.email}
            name={cellValue}
          >
            {user?.email}
          </User>
        )
      case 'type':
        return (
          <User
            avatarProps={{ radius: 'full', size: 'sm', src: user?.avatar }}
            classNames={{
              description: 'text-default-500',
            }}
            description={user?.email}
            name={cellValue}
          >
            {user?.email}
          </User>
        )
      case 'property':
        return (
          <User
            avatarProps={{ radius: 'full', size: 'sm', src: user?.avatar }}
            classNames={{
              description: 'text-default-500',
            }}
            description={user?.email}
            name={cellValue}
          >
            {user?.email}
          </User>
        )
      case 'plan':
        return (
          <User
            avatarProps={{ radius: 'full', size: 'sm', src: user?.avatar }}
            classNames={{
              description: 'text-default-500',
            }}
            description={user?.email}
            name={cellValue}
          >
            {user?.email}
          </User>
        )
      case 'payment date':
        return (
          <User
            avatarProps={{ radius: 'full', size: 'sm', src: user?.avatar }}
            classNames={{
              description: 'text-default-500',
            }}
            description={user?.email}
            name={cellValue}
          >
            {user?.email}
          </User>
        )

      case 'actions':
        return (
          <div className='relative flex justify-end items-center gap-2'>
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
                      fill='currentColor'
                    />
                  </svg>
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem>View</DropdownItem>
                <DropdownItem>Edit</DropdownItem>
                <DropdownItem>Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        )
      default:
        return cellValue
    }
  }, [])

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
        {/* <div className='flex justify-between gap-3 items-end'>
          <Input
            isClearable
            classNames={{
              base: 'w-full sm:max-w-[44%]',
              inputWrapper: 'border-1',
            }}
            placeholder='Search by name...'
            size='sm'
            // startContent={<SearchIcon className='text-default-300' />}
            value={filterValue}
            variant='bordered'
            onClear={() => setFilterValue('')}
            onValueChange={onSearchChange}
          />
          <div className='flex gap-3'>
            <Dropdown>
              <DropdownTrigger className='hidden sm:flex'>
                <Button
                  //   endContent={<ChevronDownIcon className='text-small' />}
                  size='sm'
                  variant='flat'
                >
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label='Table Columns'
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode='multiple'
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className='capitalize'>
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className='hidden sm:flex'>
                <Button
                  //   endContent={<ChevronDownIcon className='text-small' />}
                  size='sm'
                  variant='flat'
                >
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label='Table Columns'
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode='multiple'
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className='capitalize'>
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Button
              className='bg-foreground text-background'
              //   endContent={<PlusIcon />}
              size='sm'
            >
              Add New
            </Button>
          </div>
        </div> */}
        <div className='flex justify-between items-center'>
          <span className='text-default-400 text-[12px]'>
            Successfull transactions made by customer in your organization
          </span>
          <span className='text-default-400 capitalize text-[12px]'>
            show all fields
          </span>
          {/* <label className='flex items-center text-default-400 text-small'>
            Rows per page:
            <select
              className='bg-transparent outline-none text-default-400 text-small'
              onChange={onRowsPerPageChange}
            >
              <option value='5'>5</option>
              <option value='10'>10</option>
              <option value='15'>15</option>
            </select>
          </label> */}
        </div>
      </div>
    )
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    // users.length,
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
        <span className='text-small text-default-400'>
          {selectedKeys === 'all'
            ? 'All items selected'
            : `${selectedKeys.size} of ${items?.length} selected`}
        </span>
      </div>
    )
  }, [selectedKeys, items?.length, page, pages, hasSearchFilter])

  const classNames = React.useMemo(
    () => ({
      wrapper: ['max-h-[382px]', 'border-2', 'max-w-lg'],
      th: [
        'bg-transparent rounded-none bg-stone-100',
        'text-black text-[10px]',
      ],
      td: [
        // changing the rows border radius
        // first
        'group-data-[first=true]:first:before:rounded-none',
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
    <Table
      isCompact
      removeWrapper
      aria-label='Example table with custom cells, pagination and sorting'
      bottomContent={bottomContent}
      bottomContentPlacement='outside'
      checkboxesProps={{
        classNames: {
          wrapper: 'after:bg-foreground after:text-background text-background ',
        },
      }}
      //   className='w-80%'
      selectedKeys={selectedKeys}
      classNames={classNames}
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement='outside'
      onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === 'actions' ? 'center' : 'start'}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      {/* <TableBody emptyContent={'No users found'} items={sortedItems}> */}
      <TableBody emptyContent={'No transaction found'} items={sortedItems}>
        {
          (item) => (
            <TableRow key={item?.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )
          //   console.log(item?.rrr, 'itemss')
        }
      </TableBody>
    </Table>
  )
}
