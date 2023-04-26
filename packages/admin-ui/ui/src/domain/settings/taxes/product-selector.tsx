import { useAdminProducts } from "@medusajs/client-react"
import { useMemo, useState } from "react"
import ImagePlaceholder from "../../../components/fundamentals/image-placeholder"
import { useDebounce } from "../../../hooks/use-debounce"
import { SelectableTable } from "./selectable-table"

export const ProductSelector = ({ items, onChange }) => {
  const PAGE_SIZE = 12

  const [pagination, setPagination] = useState({
    limit: PAGE_SIZE,
    offset: 0,
  })
  const [query, setQuery] = useState("")

  const debouncedSearchTerm = useDebounce(query, 500)

  const { isLoading, count, products } = useAdminProducts({
    q: debouncedSearchTerm,
    ...pagination,
  })

  const handleSearch = (q) => {
    setPagination((p) => {
      return {
        ...p,
        offset: 0,
      }
    })
    setQuery(q)
  }

  const columns = useMemo(() => {
    return [
      {
        Header: "Name",
        accessor: "title",
        Cell: ({ row: { original } }) => {
          return (
            <div className="flex items-center">
              <div className="my-1.5 mr-4 flex h-[40px] w-[30px] items-center overflow-hidden rounded-sm">
                {original.thumbnail ? (
                  <img
                    src={original.thumbnail}
                    className="rounded-soft h-full object-cover"
                  />
                ) : (
                  <ImagePlaceholder />
                )}
              </div>
              <div className="flex flex-col">
                <span>{original.title}</span>
              </div>
            </div>
          )
        },
      },
    ]
  }, [])

  return (
    <SelectableTable
      label="Select Products"
      objectName="Product"
      totalCount={count}
      pagination={pagination}
      onPaginationChange={setPagination}
      selectedIds={items}
      data={products}
      columns={columns}
      isLoading={isLoading}
      onSearch={handleSearch}
      searchValue={query}
      onChange={onChange}
    />
  )
}
