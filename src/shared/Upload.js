import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import styled from "styled-components";
import { actionCreators as imageActions } from "../redux/modules/image";


const Upload = (props) => {

    const dispatch = useDispatch();
    const uploading = useSelector((state) => state.image.uploading);
    const preview = useSelector((state) => state.image.preview);
    const fileInput = React.useRef();

    // const addImage = e => {
    //     const nowSelectImageList = e.target.files;
    //     console.log(nowSelectImageList)
    //     const nowImageURLList = [...myImage];

    //     for (let i = 0; i < nowSelectImageList.length; i += 1) {
    //         test.append('image', nowSelectImageList[i])
    //         const nowImageUrl = URL.createObjectURL(nowSelectImageList[i]) //미리보기
    //         nowImageURLList.push(nowImageUrl)
    //     }
    //     setMyImage(nowImageURLList)
    //     console.log(test)
    //     console.log(nowSelectImageList)
    //     dispatch(imageActions.setPreview(nowSelectImageList));
    // }


    // 여러개 업로드
    const handleImageUpload = (e) => {
        const fileArr = e.target.files;

        let fileURLs = [];

        let file;
        let filesLength = fileArr.length > 10 ? 10 : fileArr.length;

        for (let i = 0; i < filesLength; i++) {
            file = fileArr[i];
            let reader = new FileReader();

            reader.onload = () => {
                fileURLs[i] = reader.result;
                dispatch(imageActions.setPreview(reader.result));

            };
            reader.readAsDataURL(file);
        }

    };

    return (
        <React.Fragment>
            <div padding="10px">
                <AddPhotoAlternateOutlinedIcon
                    style={{ color: "#f68843", fontSize: "30px", cursor: "pointer" }}
                    onClick={() => {
                        fileInput.current.click()

                    }} />
                <Input
                    id="file"
                    type="file"
                    multiple
                    accept="image/jpg,image/png,image/jpeg,image/gif"
                    disabled={uploading}
                    ref={fileInput}
                    onChange={handleImageUpload }
                />
            </div>
        </React.Fragment>
    );
};

const Input = styled.input`
position: absolute;
width: 0;
height: 0;
padding: 0;
overflow: hidden;
border: 0;
`

export default Upload;