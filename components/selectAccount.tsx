"use client"
import * as React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const accounts = [
  { value: "6000768015-1", label: "6000768015 - A N Other" },
  { value: "6000768015-2", label: "6000768015 - John Doe 1" },
  { value: "6000768015-3", label: "6000768015 - John Doe 2" },
  { value: "6000768015-4", label: "6000768015 - John Doe 3" },
  { value: "6000768015-5", label: "6000768015 - John Doe 4" },
]

export function SelectAccount() {
  const [selectedAccount, setSelectedAccount] = React.useState("")

  return (
    <Select onValueChange={(value) => setSelectedAccount(value)} value={selectedAccount}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="6000768015 - A N Other" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {accounts.map((account) => (
            <SelectItem key={account.value} value={account.value}>
              {account.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
