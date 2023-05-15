type Props = {
  percentage: number
}

const MAX_PERCENTAGE = 100

export const ProgressBar = ({ percentage }: Props) => {
  const barWidth = percentage > MAX_PERCENTAGE ? MAX_PERCENTAGE : percentage

  const colorByPercentage = () => {
    if (barWidth < 30) return 'bg-red-500'
    if (barWidth < 60) return 'bg-yellow-500'

    return 'bg-green-500'
  }

  return (
    <div className="bg-gray-200 h-2 rounded w-full">
      <div
        className={`${colorByPercentage()} h-full rounded`}
        style={{ width: `${barWidth}%` }}
      ></div>
    </div>
  )
}
