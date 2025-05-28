'use client'
import { useEffect, useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isContrast, setContrast] = useState(false)
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal')

  useEffect(() => {
    // Font size
    document.documentElement.style.fontSize = fontSize === 'large' ? '18px' : '16px'

    // Contrast
    document.body.classList.toggle('high-contrast', isContrast)
  }, [isContrast, fontSize])

  return (
    <div className="fixed bottom-4 right-4 z-50 p-4 bg-white rounded-xl shadow-lg space-y-2 w-52">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium bg-gray-100 hover:bg-gray-200 rounded"
      >
        Accessibility
        {isOpen ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
      </button>

      {isOpen && (
        <div className="space-y-2">
          <button
            onClick={() => setFontSize(fontSize === 'normal' ? 'large' : 'normal')}
            className="w-full px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded"
          >
            Toggle Font Size
          </button>
          <button
            onClick={() => setContrast(!isContrast)}
            className="w-full px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded"
          >
            Toggle High Contrast
          </button>
          {/* <a
            href="#main-content"
            className="block px-3 py-2 text-sm text-blue-600 underline hover:text-blue-800"
          >
            Skip to Content
          </a> */}
        </div>
      )}
    </div>
  )
}
