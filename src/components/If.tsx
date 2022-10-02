const If = (params: { case: any; children: any }) => {
  return params.case ? params.children : <></>;
};

export default If;
