// code your solution here


const superbowlWin = (records) => {
    const result = records.find((record) => record.result === "W")
    if (result) {
        return result.year
    }
  }
