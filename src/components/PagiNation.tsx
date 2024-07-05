type TotalPagesProps = {
  totalPages: number;
  page: number;
  setPage: (page: number | ((prevPage: number) => number)) => void;
};

export default function PagiNation({
  totalPages,
  page,
  setPage,
}: TotalPagesProps) {
  return (
    <div className="flex justify-center mt-5">
      <button
        onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
        disabled={page === 1}
        className={`px-3 py-1 mx-1 border rounded ${
          page === 1
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 text-white"
        }`}
      >
        {"<"}
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index + 1}
          onClick={() => setPage(index + 1)}
          className={`px-3 py-1 mx-1 border rounded ${
            page === index + 1
              ? "bg-blue-700 text-white font-bold"
              : "bg-blue-500 text-white"
          }`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={page === totalPages}
        className={`px-3 py-1 mx-1 border rounded ${
          page === totalPages
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 text-white"
        }`}
      >
        {">"}
      </button>
    </div>
  );
}
