import {
  PaginationState,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Button } from '../../../styles/button';
import { useNavigate } from 'react-router-dom';
import { addFavoritesIntoResponse, getPlanets } from '../../../api';
import { columns } from './columns';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { useEffect, useMemo, useState } from 'react';
import { useFavoritePlanets } from '../../../store/favorite';
import {
  ButtonPages,
  NavigatorTable,
  StyledTBody,
  StyledTHead,
  StyledTable,
  StyledTd,
  StyledTh,
  StyledTr,
  StyledTrHeader,
} from './style';
import loading from '../../../assets/loading.svg';
import { ErrorContainer } from '../../notFound/style';
import { Overlay } from '../../../styles/global';
import { usePlanets } from '../../../store/planets';

const Table = () => {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  const favorites = useFavoritePlanets((state) => state.favorites);
  const addFavorite = useFavoritePlanets((state) => state.addFavorite);
  const removeFavorite = useFavoritePlanets((state) => state.removeFavorite);
  const setPlanets = usePlanets((state) => state.setPlanets);
  const setStatus = usePlanets((state) => state.setStatus);
  const navigate = useNavigate();

  const { data, isFetching, isLoading, isError } = useQuery({
    queryKey: ['planets', pagination.pageIndex, favorites],
    queryFn: () =>
      getPlanets(pagination.pageIndex + 1, favorites, setPlanets, setStatus),
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (data) {
      addFavoritesIntoResponse(data?.results, favorites);
    }
  }, [favorites]);

  const table = useReactTable({
    data: data ? data.results : [],
    columns: columns(addFavorite, removeFavorite),
    pageCount: data ? data?.count / pagination.pageSize : 0,
    state: { pagination },
    onPaginationChange: setPagination,
    manualPagination: true,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      {isFetching || isLoading ? (
        <Overlay>
          <img src={loading} style={{ width: '5rem', height: '5rem' }} alt="" />
        </Overlay>
      ) : null}
      {data && (
        <div style={{ width: '100%', padding: '20px' }}>
          <StyledTable $detailVisualized={false}>
            <StyledTHead>
              {table.getHeaderGroups().map((headerGroup) => (
                <StyledTrHeader key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <StyledTh key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </StyledTh>
                  ))}
                </StyledTrHeader>
              ))}
            </StyledTHead>
            <StyledTBody>
              {table.getRowModel().rows.map((row) => (
                <StyledTr
                  key={row.id}
                  onClick={() => navigate(`/planets/${row.original.name}`)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <StyledTd key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </StyledTd>
                  ))}
                </StyledTr>
              ))}
            </StyledTBody>
          </StyledTable>
          <NavigatorTable>
            <ButtonPages
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              {'<<'}
            </ButtonPages>
            <ButtonPages
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              {'<'}
            </ButtonPages>
            <ButtonPages
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              {'>'}
            </ButtonPages>
            <ButtonPages
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              {'>>'}
            </ButtonPages>
            <div>Page:</div>
            <strong>
              {table.getState().pagination.pageIndex + 1} of{' '}
              {table.getPageCount()}
            </strong>
            <div>Go to page:</div>
            <input
              style={{ borderRadius: '5px', width: '3rem' }}
              min={1}
              max={10}
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="border p-1 rounded w-16"
            />
          </NavigatorTable>
        </div>
      )}
      {isError && (
        <ErrorContainer>
          We're sorry! Problems with the response.
          <Button onClick={() => navigate(0)}>Refresh page</Button>
        </ErrorContainer>
      )}
    </>
  );
};

export default Table;
