import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,

  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectAccount() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="6000768015 - A N Other" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {/* <SelectLabel>6000768015 - A N Other</SelectLabel> */}
          <SelectItem value="6000768015">6000768015 - A N Other</SelectItem>
          <SelectItem value="6000768015">6000768015 - John Doe</SelectItem>
          <SelectItem value="6000768015">6000768015 - John Doe</SelectItem>
          <SelectItem value="6000768015">6000768015 - John Doe</SelectItem>
          <SelectItem value="6000768015">6000768015 - John Doe</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
