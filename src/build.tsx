import React from 'react'
import ReactPDF from '@react-pdf/renderer'
import { Resume } from './resume'

ReactPDF.render(<Resume />, `${__dirname}/JoeStrouth.pdf`)
