import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import Nightmare from 'nightmare'

const app = express()
const nightmare = Nightmare({ show: true })

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())
app.use(helmet())

app.get('/', (req, res) => {
 
  res.json([1, 2]);
})

export default app
