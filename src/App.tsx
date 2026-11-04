import { useState } from 'react'
import { Model } from 'survey-core'
import { Survey } from 'survey-react-ui'
import 'survey-core/survey-core.css'
import { surveyJson } from './surveyJson'
import { philippinesTheme } from './theme'

type Answers = Record<string, unknown>

function App() {
  const [answers, setAnswers] = useState<Answers>({})
  const [isCompleted, setIsCompleted] = useState(false)

  const [survey] = useState(() => {
    const model = new Model(surveyJson)
    model.applyTheme(philippinesTheme)
    // Keep React state in sync with every answer the respondent gives or changes
    model.onValueChanged.add((sender) => {
      setAnswers({ ...sender.data })
    })
    model.onComplete.add((sender) => {
      setAnswers({ ...sender.data })
      setIsCompleted(true)
    })
    return model
  })

  console.log('answers:', answers, 'completed:', isCompleted)

  return <Survey model={survey} />
}

export default App
