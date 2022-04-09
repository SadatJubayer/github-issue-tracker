import { getPageNumbers } from 'utils';
import { ISSUES_PER_PAGE } from 'utils/constants';
import { ActionButton } from './ActionButton';

interface IPaginationProps {
    total: number;
    currentPage: number;
    perPage?: number;
    onPageChange: (pageNo: number) => void;
}

export const Pagination = ({
    total,
    currentPage,
    perPage = ISSUES_PER_PAGE,
    onPageChange,
}: IPaginationProps) => {
    const totalPageCount = Math.ceil(total / perPage);

    return (
        <div className="flex space-x-2.5 items-center py-5">
            <ActionButton
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 0}
                text={`‹ Prev`}
            />
            <ul className="flex items-center space-x-2.5">
                {getPageNumbers(totalPageCount, currentPage, onPageChange)}
            </ul>

            <ActionButton
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPageCount}
                text={`Next ›`}
            />
        </div>
    );
};
