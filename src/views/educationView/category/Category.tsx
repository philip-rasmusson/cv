

export const Category = (props?: { title?: string, year?: string, text?: string, desc?: string, li1?: string, li2?: string, li3?: string, education: boolean }) => {
  return props?.education === true ?
    <>
      <h3>{props?.title}</h3>
      <h4>{props?.year}</h4>
      <p>{props?.text}</p>
    </>
    : <>
      <h3>{props?.title}</h3>
      <h4>{props?.year}</h4>
      <h4>{props?.desc}</h4>
      <ul>
        <li>{props?.li1}</li>
        <li>{props?.li2}</li>
        <li>{props?.li3}</li>
      </ul>
    </>

}
