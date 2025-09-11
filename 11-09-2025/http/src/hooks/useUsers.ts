import { useEffect, useState } from "react"

import { type UserType } from "../components/User"

export default function useUsers() {
  const [users, setUsers] = useState<UserType[]>([])
  const [hasError, setHasError] = useState<boolean>(false)
  const [isLoading, setLoading] = useState<boolean>(true)

  const fetchAllUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')

      if (!response.ok) {
        throw new Error('Failed to fetch all users')
      }

      const data: UserType[] = await response.json()
      setUsers(data)
    } catch (error) {
      setHasError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAllUsers()
  }, [])

  return {users, setUsers, hasError, isLoading}
}