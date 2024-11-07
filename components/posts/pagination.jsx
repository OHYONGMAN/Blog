import { useRouter } from "next/navigation";
import {
  PaginationWrapper,
  PageButton,
} from "@/styled-components/pagination.styles";

export default function Pagination({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) {
  const router = useRouter();
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (number) => {
    paginate(number); // 페이지 상태 업데이트
    router.push(`?page=${number}`); // URL에 페이지 번호 추가
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      handlePageClick(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pageNumbers.length) {
      handlePageClick(currentPage + 1);
    }
  };

  return (
    <PaginationWrapper>
      <PageButton onClick={handlePreviousPage} disabled={currentPage === 1}>
        이전
      </PageButton>

      {pageNumbers.map((number) => (
        <PageButton
          key={number}
          onClick={() => handlePageClick(number)}
          active={currentPage === number}
        >
          {number}
        </PageButton>
      ))}

      <PageButton
        onClick={handleNextPage}
        disabled={currentPage === pageNumbers.length}
      >
        다음
      </PageButton>
    </PaginationWrapper>
  );
}
