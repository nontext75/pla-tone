'use client'

import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { useForm } from '@payloadcms/ui'
import type { FormState } from 'payload'

interface AddRowAction {
    type: 'ADD_ROW'
    path: string
    rowIndex?: number
    subFieldState?: FormState
    blockType?: string
}

export const BulkUpload: React.FC<any> = (props) => {
    const { dispatchFields } = useForm()
    const [uploading, setUploading] = useState(false)
    const [progress, setProgress] = useState(0)

    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        setUploading(true)
        setProgress(0)
        let completed = 0

        for (const file of acceptedFiles) {
            const formData = new FormData()
            formData.append('file', file)

            try {
                const res = await fetch('/api/media', {
                    method: 'POST',
                    body: formData,
                })

                if (res.ok) {
                    const data = await res.json()

                    const action: AddRowAction = {
                        type: 'ADD_ROW',
                        path: 'gallery',
                        subFieldState: {
                            image: {
                                value: data.doc.id,
                                valid: true,
                                initialValue: undefined,
                                passesCondition: true,
                                disableFormData: false,
                            }
                        }
                    }

                    dispatchFields(action as never)

                    console.log('Uploaded and added to gallery:', data.doc.id)
                }
            } catch (e) {
                console.error('Upload failed', e)
            }
            completed++
            setProgress((completed / acceptedFiles.length) * 100)
        }

        setUploading(false)
    }, [dispatchFields])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: { 'image/*': [] } })

    return (
        <div style={{ marginBottom: '20px' }}>
            <label className="field-label" style={{ marginBottom: '10px', display: 'block', fontWeight: 'bold' }}>
                Bulk Image Upload (Drag & Drop)
            </label>
            <div
                {...getRootProps()}
                style={{
                    border: '2px dashed #555',
                    borderRadius: '8px',
                    padding: '30px',
                    textAlign: 'center',
                    backgroundColor: isDragActive ? '#333' : '#1A1A1A',
                    cursor: 'pointer',
                    color: '#fff',
                    transition: 'background-color 0.2s, border-color 0.2s',
                    borderColor: isDragActive ? '#7D5FFF' : '#555'
                }}
            >
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p style={{ margin: 0 }}>Drop the images here ...</p> :
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                            <p style={{ margin: 0, fontSize: '14px' }}>Drag 'n' drop some images here, or click to select files</p>
                            <span style={{ fontSize: '12px', opacity: 0.6 }}>(Images will be automatically added to the Gallery below)</span>
                        </div>
                }
                {uploading && (
                    <div style={{ marginTop: '15px', width: '100%', backgroundColor: '#333', borderRadius: '4px', height: '6px', overflow: 'hidden' }}>
                        <div style={{ width: `${progress}%`, backgroundColor: '#7D5FFF', height: '100%', transition: 'width 0.3s ease' }} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default BulkUpload
