export default function DayView({number, dark}: {number: number, dark?: boolean}) {
    return (
        <div className={`flex justify-center` + (dark ? " opacity-30" : " ") + ` border-b-2 border-gray-300 p-2 w-full`}>
            <div>{number}</div>
        </div>
    )
}