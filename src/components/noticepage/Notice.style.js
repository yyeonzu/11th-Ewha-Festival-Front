import styled from 'styled-components';

const COM = {};
COM.Wrapper = styled.div`
  width: 100%;
  background-color: var(--beige);
`;
COM.WhiteBtn = styled.button`
  width: 90px;
  height: 30px;
  border-radius: 5px;
  box-shadow: 0px 2px 6px rgba(165, 165, 165, 0.2);
  background-color: var(--white);
  margin-right: 10px;
  color: var(--green2);
  border: 0.4px solid var(--green2);
  font-family: var(--pre-font);
  font-size: 1rem;
  font-weight: 600;
`;
COM.GreenBtn = styled.button`
  width: 90px;
  height: 30px;
  border-radius: 5px;
  box-shadow: 0px 2px 6px rgba(165, 165, 165, 0.2);
  background-color: var(--green2);
  color: var(--white);
  border: none;
  font-family: var(--pre-font);
  font-size: 1rem;
  font-weight: 600;
`;

const L = {};
L.NoticeWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 265px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
L.WriteBtn = styled.div`
  width: 88%;
  height: 30px;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  div {
    font-family: var(--pre-font);
    font-size: 1em;
    font-weight: 500;
    text-decoration: underline;
    color: var(--green2);
    margin-left: 3px;
  }
`;
L.NoticeContainer = styled.div`
  width: 88%;
  min-height: 50px;
  margin-bottom: 20px;
  .inner {
    display: flex;
    height: 30px;
    align-items: center;
    margin-bottom: 10px;
  }
`;
L.Border = styled.div`
  width: 1000%;
  border-bottom: 1px solid var(--gray2);
  opacity: 0.5;
`;
L.NoticeTitle = styled.div`
  font-family: var(--pre-font);
  font-size: 1em;
  font-weight: 600;
  color: var(--black);
`;
L.NoticeText = styled.div`
  font-family: var(--pre-font);
  font-size: 0.9rem;
  font-weight: 400;
`;
L.Bottom = styled.div`
  width: 100%;
  height: 30px;
`;

const D = {};
D.Container = styled.div`
  width: 88%;
  min-height: calc(100vh - 248px);
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  .inner {
    display: flex;
    justify-content: space-between;
    height: 40px;
    align-items: center;
    margin-bottom: 10px;
    padding: 0 5px;
  }
`;
D.Border = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--gray2);
  opacity: 0.5;
  margin: 20px 0 10px 0;
`;
D.NoticeTitle = styled.div`
  font-family: var(--pre-font);
  font-size: 1.1em;
  font-weight: 600;
  color: var(--black);
  padding: 0 5px;
`;
D.NoticeText = styled.div`
  font-family: var(--pre-font);
  font-size: 0.9rem;
  font-weight: 400;
`;
D.Text = styled.div`
  font-family: var(--pre-font);
  font-size: 1rem;
  font-weight: 400;
  color: var(--black);
  margin: 10px 0;
  padding: 0 5px;
`;
D.Input = styled.input`
  font-size: 1.1rem;
  font-family: var(--pre-font);
  border: 0;
  background-color: transparent;
  :focus {
    outline: 0;
  }
  padding-left: 5px;
`;
D.TextArea = styled.textarea`
  border: 0;
  background-color: transparent;
  resize: none;
  width: 100%;
  height: calc(100vh - 430px);
  padding: 5px;
  font-size: 1rem;
  font-family: var(--pre-font);
  :focus {
    outline: 0;
  }
`;
D.BottomContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const W = {};
W.Container = styled.div`
  width: 88%;
  min-height: calc(100vh - 233px);
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

export { COM, L, D, W };
