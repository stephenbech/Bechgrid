import Link from "next/link"

export default function Footer({ topic, page, prevPage, nextPage }) {

    if (!prevPage && !nextPage) return

    const pageNums = []
    if (prevPage && nextPage) {
        for (let i = parseInt(prevPage) + 1; i < parseInt(nextPage); i++) {
            pageNums.push(i)
        }
    }

    const nextPageArea = nextPage
        ? (
            <Link href={`/results/${topic}/${nextPage}`} className={!prevPage ? "mx-auto" : null} >
                {!prevPage ? "more" : null} &gt;&gt;&gt;
            </Link>
        )
        : null

    const prevPageArea = prevPage
        ? (
            <>
                <Link href={`/results/${topic}/${prevPage}`} className={!nextPage ? "mx-auto" : null} >
                    &lt;&lt;&lt; {!nextPage ? "back" : null}
                </Link>

                {pageNums.map((num, i) => (
                    page && num === parseInt(page)
                        ? <span key={i}>{num}</span>
                        : (
                            <Link key={i} href={`/results/${topic}/${num}`} className="underline"
                            >{num}</Link>
                        )
                ))}
            </>
        )
        : null

    return (
        <footer className="flex flex-row justify-between items-center px-2 py-4 font-bold w-60 mx-auto">
            {prevPageArea}
            {nextPageArea}
        </footer>
    )
}