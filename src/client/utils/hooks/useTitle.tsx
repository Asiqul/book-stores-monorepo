import { useEffect } from 'react';

function useTitle(title: string) {
    useEffect(() => {
        document.title = `BukuKita - ${title}`;
    }, [title]);
}

export default useTitle;
