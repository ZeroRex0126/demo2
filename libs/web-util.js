export async function getWebSettingData() {
  const response = await fetch("/api/webdata", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
}
//Reserve data
export async function getReservationDatas() {
  const response = await fetch("/api/reservation", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
}

export async function findReservationDataByEmail(email) {
  const response = await fetch("/api/reservation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type: "find", email: email }),
  });

  let data;

  if (response.json) {
    data = response.json();
  }

  return data;
}

export async function deleteReservationData(reservationData) {
  const response = await fetch("/api/reservation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type: "delete", context: reservationData }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
}

export async function deleteReservationDatas(reservationDatas) {
  const response = await fetch("/api/reservation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type: "deleteMultiple", context: reservationDatas }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
}

export async function addReservationData(reservationData) {
  const response = await fetch("/api/reservation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      type: "add",
      context: reservationData,
    }),
  });

  const data = await response.json();

  return data;
}

export async function updateReservationData(reservationData) {
  const response = await fetch("/api/reservation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      type: "update",
      context: reservationData,
    }),
  });

  const data = await response.json();

  return data;
}

//End Reserve data

export function getRemainingDate(data) {
  if (data && data !== {}) {
    let currentDate = new Date();
    let wedDate = new Date(data.year, data.month, data.day);

    if (wedDate > currentDate) {
      let remaining = new Date(wedDate.getTime() - currentDate.getTime());
      var seconds = Math.floor((wedDate - currentDate) / 1000);
      var minutes = Math.floor(seconds / 60);
      var hours = Math.floor(minutes / 60);
      var dayscal = Math.floor(hours / 24);
      var days = remaining.getDate() - 1;
      var years = remaining.getFullYear() - 1970; // Gives difference as year
      var months = remaining.getMonth(); // Gives month count of difference

      hours = hours - dayscal * 24;
      minutes = minutes - dayscal * 24 * 60 - hours * 60;
      seconds =
        seconds - dayscal * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;

      return { years, months, days, hours, minutes, seconds };
    } else {
      return { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }
}
