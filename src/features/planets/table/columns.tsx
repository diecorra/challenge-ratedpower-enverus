import { createColumnHelper } from '@tanstack/react-table';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { Planet } from 'src/model/planetAPIResult';
import { BLUE_SKY } from 'src/styles/theme';

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
        <FaStar
          style={{
            cursor: 'pointer',
            color: BLUE_SKY,
          }}
          onClick={() => removeFavorite(info.row.original.name)}
        />
      ) : (
        <FaRegStar
          style={{ cursor: 'pointer' }}
          onClick={() => addFavorite(info.row.original)}
        />
      ),
  }),
];
