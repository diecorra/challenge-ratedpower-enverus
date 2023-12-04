import { createColumnHelper } from '@tanstack/react-table';
import { Planet } from 'src/model/planetAPIResult';
import { FaRegStarUnMarked, FaStarMarked } from './style';

const columnHelper = createColumnHelper<Planet>();

export const columns = (addFavorite: any, removeFavorite: any) => [
  columnHelper.accessor('name', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('climate', {
    cell: (info) => (info.getValue() !== 'unknown' ? info.getValue() : '-'),
  }),

  columnHelper.accessor('diameter', {
    cell: (info) => (info.getValue() !== 'unknown' ? info.getValue() : '-'),
  }),

  columnHelper.accessor('population', {
    cell: (info) => (info.getValue() !== 'unknown' ? info.getValue() : '-'),
  }),

  columnHelper.accessor('favorite', {
    cell: (info) =>
      info.getValue() ? (
        <FaStarMarked
          data-testid={`starMarked${info.row.id}`}
          onClick={(e: any) => {
            removeFavorite(info.row.original.name);
            e.stopPropagation();
          }}
        />
      ) : (
        <FaRegStarUnMarked
          data-testid={`starUnMarked${info.row.id}`}
          onClick={(e: any) => {
            addFavorite(info.row.original);
            e.stopPropagation();
          }}
        />
      ),
  }),
];
