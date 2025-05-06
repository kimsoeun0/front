import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DropZoneContainer = styled.div`
    width: 100%;
    height: 200px;
    border: 2px dashed #ccc;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: #555;
    cursor: pointer; 

    &:hover {
        border-color: #008CBA;
    }

    &.dragging {
        background-color: #f0f0f0;
}
`;

const ErrorMessage = styled.p`
    color: red;
    font-size: 14px;
`;

const Container = styled.div`
    width: 100%;
    max-width: 700px;
    margin: 40px auto; /* 중앙 정렬 + 위쪽 여백 */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 2px solid gray;
    border-radius: 10px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
`;

const FileUpload = () => {
    const [file, setFile ] = useState(null);
    const [error, setError ] = useState(null);
    const navigate = useNavigate();

    const onDrop = (acceptedFiles) => {
        const selectedFile = acceptedFiles[0];
        if (selectedFile) {
            if (
                selectedFile.type === "application/pdf" ||
                selectedFile.type.startsWith("image/") ||
                selectedFile.type === "text/plain" ||
                selectedFile.type === "application/msword"
            ) {
                setFile(selectedFile);
                setError(null);
            } else {
                setError('지원하지 않는 파일 형식');
            }
        }
    };


    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const handleUpload = async () => {
        if (!file) {
            setError('파일 선택 필요');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('/upload', formData, {    //서버 필요
                headers: {
                    'Content-Type' : 'multipart/form-data',
                },
            });

            if (response.status === 200) {
                navigate('/success');
            }

        } catch (err) {
            console.error('파일 업로드 실패:', err);
            setError('파일 업로드에 실패했습니다.');
        }
    };

    return (
        <Container>
            <p>파일을 드래그하거나 클릭하여 업로드 해주세요.</p>
            <DropZoneContainer {...getRootProps()} className={file ? '' : 'dragging'}>
            <input {...getInputProps()} />
            {file ? (
                <p>선택된 파일: {file.name}</p>
            ) : (
                <p>드래그 혹은 클릭</p>
            )}
            </DropZoneContainer>

            <button onClick={handleUpload} style={{ marginTop: "20px"}}>업로드</button>

            {error && <ErrorMessage>{error}</ErrorMessage>}

        </Container>
    );
};

export default FileUpload;