const questions = [
    {
        id: 100,
        question: "Question 1"
    }, {
        id: 101,
        question: "Question 2"
    }
]
export default function question() {

    return <div>
        <h1>Question listing</h1>
        <table>
            <thead>
                <tr>
                    <th>Question ID</th>
                    <th>Question Description</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
            {questions.map(item => <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.question}</td>
                <td><a href={`/question/${item.id}`}>Details</a></td>
            </tr>)}
            </tbody>
        </table>
    </div>
}
