import dayjs from 'dayjs'

export const formatDate = (date, format='YYYY-MM-DD HH:mm') => dayjs(date).format(format)
