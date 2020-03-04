import styled from 'styled-components';
export const Wrapper = styled.div`
    display:flex;
    padding:10px;
    background:#f5f5f5;
    .content {
        position:relative;
        width:50%;
        margin: 0 5px;
        &.main {
            border-right:2px solid #E0E0E0;
        }
        &.similar {
            h2 {
                padding-left:0px;
                text-align:center;
            }
            .source-list {
                
            }
            .placeholder-wrap {
                position:relative;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                .placeholder {
                    margin:0 auto;
                    text-align:center;
                    line-height: 31px;
                    button {
                        margin:0;
                    }
                 }
            }

            .source-category {
                padding-left:40px;
                line-height:48px;
                color:#4C4C4C;
                background:#FAFAFA;
            }
        }
        h2 {
            margin-bottom:3px;
            background:#fff;
            color:#4C4C4C;
            line-height: 48px;
            padding-left:25px;
            font-weight:bold;
            
        }
        .source-list {
            max-height: 800px;
            overflow-y: scroll;
            .problem-box {
                background:#fff;
                margin-bottom:8px;
                padding: 0 20px;
                &:last-child{
                    margin-bottom:0;
                }
            }
            .problem-title {
                display:flex;

                position:relative;
                border-bottom:1px solid #D8D8D8;
                margin-bottom: 17px;
                box-sizing:border-box;
                p{
                    color:#4C4C4C;
                    line-height: 48px;
                }
                .btn {
                    position:absolute;
                    right:0;
                    top:6px;
                    button {
                        &:hover {
                            background:#00ABFF;
                            color:#fff;
                        }
                        &.active {
                            background:#00ABFF;
                            color:#fff;
                        }
                    }

                }
            }
            span {
                display:inline-block;
                width: 82px;
                text-align: center;
                vertical-align: top;
                color:#9F9F9F;
                line-height: 48px;
                &.numbering {
                    line-height: inherit;
                    color:#02C7F2;
                    font-size:20px;
                    font-weight:bold;
                }
            }
            .problem-content {
                padding-bottom:30px;
            }

        }
    }
`;