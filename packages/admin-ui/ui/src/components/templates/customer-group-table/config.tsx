import { Customer, CustomerGroup, SetRelation } from "@medusajs/client-types"
import { Column } from "react-table"

import CustomerAvatarItem from "../../molecules/customer-avatar-item"
import { getColor } from "../../../utils/color"
import SortingIcon from "../../fundamentals/icons/sorting-icon"
import CustomersGroupsSummary from "../../molecules/customers-groups-summary"
import IndeterminateCheckbox from "../../molecules/indeterminate-checkbox"
import Table from "../../molecules/table"

type CustomerWithRelations = SetRelation<Customer, "groups">

export const CUSTOMER_GROUPS_TABLE_COLUMNS: Column<CustomerGroup>[] = [
  {
    Header: () => (
      <div className="flex items-center gap-1">
        Title <SortingIcon size={16} />
      </div>
    ),
    accessor: "name",
  },
  {
    Header: () => (
      <div className="flex items-center gap-1">
        Members <SortingIcon size={16} />
      </div>
    ),
    id: "members",
    accessor: (r) => r.customers?.length,
  },
]

// eslint-disable-next-line max-len
export const CUSTOMER_GROUPS_CUSTOMERS_TABLE_COLUMNS: Column<CustomerWithRelations>[] =
  [
    {
      id: "selection",
      Header: ({ getToggleAllPageRowsSelectedProps }) => (
        <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
      ),
      Cell: ({ row }) => {
        return (
          <Table.Cell
            onClick={(e) => e.stopPropagation()}
            className="w-[100px]"
          >
            <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
          </Table.Cell>
        )
      },
    },
    {
      Header: () => (
        <div className="flex items-center gap-1">
          Name <SortingIcon size={16} />
        </div>
      ),
      id: "avatar",
      Cell: ({ row }) => (
        <CustomerAvatarItem
          customer={row.original}
          color={getColor(row.index)}
        />
      ),
    },
    {
      Header: () => (
        <div className="flex items-center gap-1">
          Email <SortingIcon size={16} />
        </div>
      ),
      accessor: "email",
    },
    {
      accessor: "groups",
      Header: () => <div className="text-left">Segments</div>,
      Cell: ({ cell: { value } }) => <CustomersGroupsSummary groups={value} />,
    },
  ]

// eslint-disable-next-line max-len
export const CUSTOMER_GROUPS_CUSTOMERS_LIST_TABLE_COLUMNS: Column<CustomerWithRelations>[] =
  [
    {
      Header: () => (
        <div className="flex items-center gap-1">
          Name <SortingIcon size={16} />
        </div>
      ),
      id: "avatar",
      Cell: ({ row }) => (
        <CustomerAvatarItem
          customer={row.original}
          color={getColor(row.index)}
        />
      ),
    },
    {
      Header: () => (
        <div className="flex items-center gap-1">
          Email <SortingIcon size={16} />
        </div>
      ),
      accessor: "email",
    },
    {
      accessor: "groups",
      disableSortBy: true,
      Header: "Groups",
      Cell: ({ cell: { value } }) => <CustomersGroupsSummary groups={value} />,
    },
    {
      Header: "",
      id: "settings-col",
    },
  ]
