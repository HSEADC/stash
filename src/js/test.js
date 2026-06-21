console.clear()

import { initTest, chooseAnswer } from './tests.js'
import { testsData } from './testsData.js'

const testId = Number(document.body.getAttribute('test_id')) || 1

const currentTest = testsData.find((t) => t.id === testId)

if (currentTest) {
  initTest(currentTest.stages)
  chooseAnswer(currentTest.stages, currentTest.results)
} else {
  window.location.href = '../tests.html'
}
