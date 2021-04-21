import 'core-js/stable'
import 'regenerator-runtime/runtime'
import '@testing-library/jest-dom'

Object.defineProperty(window, 'scrollTo', { value: jest.fn(), writable: true })
