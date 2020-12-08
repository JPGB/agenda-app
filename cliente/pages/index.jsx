import NavBar from "../components/NavBar"

import Calendar from 'react-calendar'

import 'react-calendar/dist/Calendar.css'

export default function Home() {
  return (
    <>
        <style global jsx>{`
            .react-calendar__tile {
                height: 100px
            }
            .react-calendar{
                width: 100%
            }
        `}</style>
        <NavBar/>
        <Calendar
            hover={
                new Date(2017, 0, 1)
            }
            style={{ width:'100%' }}
        />

    </>
  )
}
