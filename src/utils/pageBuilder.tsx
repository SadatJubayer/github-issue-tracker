import { NumberButton } from 'components/pagination/NumberButton';

export const getPageNumbers = (
    totalPageCount: number,
    currentPage: number,
    onClick: (pageNo: number) => void
) => {
    const pageNumbers = [];

    /* If less than seven, no dotdot needed */
    if (totalPageCount <= 7) {
        for (let i = 0; i < totalPageCount; i++) {
            pageNumbers.push(
                <NumberButton
                    isActive={currentPage === i + 1}
                    text={(i + 1).toString()}
                    key={i + 1}
                    onClick={() => onClick(i + 1)}
                />
            );
        }
        return pageNumbers;
    }
    let firstFour: number[] = [];
    if (currentPage > 1) {
        firstFour = [currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
    } else {
        firstFour = [currentPage, currentPage + 1, currentPage + 2, currentPage + 3];
    }
    const lastTow = [totalPageCount - 1, totalPageCount];

    for (let i = 0; i < firstFour.length; i++) {
        pageNumbers.push(
            <NumberButton
                isActive={currentPage === firstFour[i]}
                text={firstFour[i].toString()}
                key={firstFour[i]}
                onClick={() => onClick(firstFour[i])}
            />
        );
    }
    pageNumbers.push(<span>...</span>);
    for (let i = 0; i < lastTow.length; i++) {
        pageNumbers.push(
            <NumberButton
                isActive={currentPage === lastTow[i]}
                text={lastTow[i].toString()}
                key={lastTow[i]}
                onClick={() => onClick(lastTow[i])}
            />
        );
    }
    return pageNumbers;
};
