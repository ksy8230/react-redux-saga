import styled from 'styled-components';
export const ProblemsListWrap = styled.div`
  max-height: 800px;
  overflow-y: scroll;
  .problem-box {
      background:#fff;
      margin-bottom:8px;
      padding: 0 20px 0 0;
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
`;