const END_POINT = 'https://cat-search.edu-api.programmers.co.kr'

export const request = async(url) => {
    try {
        const res = await fetch(`${END_POINT}${url}`)

        if(!res.ok) {
            throw new Error('API 호출 실패')
        }
        return await res.json()
    } catch (e) {
        alert(e.message)
    }
}