import { Button, Card, Form, Row, Stack } from "react-bootstrap";

export default function Symtomps() {
    return (
        <main style={{ padding: "1rem 0" }}>  
        <div className="container">
        <p>Bạn đang có triệu chứng gì?</p>
        <div>
        <Row className="px-4 my-5">
        <Stack direction="horizontal" gap={3}>
  <Form.Control className="me-auto" placeholder="Nhập triệu chứng cần tìm..." />
  <Button variant="secondary">Tìm kiếm</Button>
</Stack>
        </Row>
        <Row className="px-4 my-5">
        <Card className="me-4" style={{ width: '18rem' }}>
  <Card.Img variant="top" width="300" height="150" src="data:image/jpeg;base64,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" />
  <Card.Body>
    <Card.Title>Sốt</Card.Title>
    <Card.Text>
      Bạn cảm thấy đau đầu, chóng mặt và cặp nhiệt độ thì thấy nhiệt độ lớn hơn 37C.
    </Card.Text>
    <Button variant="primary">Chọn triệu chứng</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" width="300" height="150" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhgSFRIYGBISERISGBIYEhIYEhESGBgZGhgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQkJCE0MTQ0NDQ0MTQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDE0MTE0NDQ0NDQxNDQ0NP/AABEIAIwBaAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQIFBgMEB//EAD0QAAIBAgMECAQDBwQDAQAAAAECAAMRBBIhBTFBUQYTImFxgZGhMkKxwRQj0QczUmJysvBzgqLhQ5LxJP/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACERAQEBAQADAAIDAQEAAAAAAAABAhEDITESQSIyUaET/9oADAMBAAIRAxEAPwC6hCEh6gjEUBAcICEAhCEAhCEAhCEAhCEAhCEAhCEBGEDCBBzYXO4a+U+KbSxJq13qcXqMR3C+ntafZsefyntvyPbxsZ8UqKQ3mDK/th5/kfXeguw6NTCU6zDM7A3J/iDEfabxDYADhpPnn7Jsdmo1KJP7qpmHcr3I9w8+g5rTLX1bPvMSqAn9JXY7ZNOqhV6asDzAvPTidpUqWr1FW+651PgJ4G6TYdr5czW/hRjeQswm2egpBLUl05XBtMdjth16ROamwHOxtPttLFCrqFIFr9q36yNagrKcyg3vvETViL486fARTfvlx0cLqWp2BFZkRiQCVC3OhO7fNVt3Y1ME5NL8JVpsVgmcgEK9MZOYY2uPMgS112KZ8X466ljNnmmSQLj5gNQRzE8dfDLl5o3t+k320Nl06eHDFVTLYMBcKMxVQviSfrMZiafVsRa6E38u6Z/KvrMVWHrNRcK5Nvlbn58Jrtl7YzWRzrwfn4zN4mgCtviQ6jmO8Tx0ajUjY6odzazTOlc6/F9KvEZnNmbWsADqnPfaX6OGAINweM0zrrozrqRiJgTIkyyQZEwJiJgOEV4rwCImOIwgoREwgXIkpG8LyVUoQhAIXhCA7wiheA4QEJAIQhAcUIoDhCEAhFC8AMIQgccUt6bDmpHtPk2Mwlj4qD6aGfXHFxbumD2vg8vaA+B205i9/oZnq8qnkz2K3ovt58C9TKqnrQg7RsFZC1v7jPo+xOktSrUSlWpZOs0DqylQx3cb93nPlOMwlmvwOv0/UTcdGthYmstCulRVoo9NyBcu5psAwY8LlDpraVvL7ZZ7PS16Q9GKlTEBlfPfXK1woHfzlTtHalSgfw6U/wAwGwprTLC/cRb2vPpddwHDcLDWcyKTtey5xx0vInGtl/Su6MbOenQV6zFqzjMw+VL7lA7v1ktp1MoMsaj2Gm6Z/atW+kir5ildC737568Bh1/EUwwGXNftbsyglT4gi477SWEo8Z59uUC9Nwt8+U5bby3ygd97RIavC/aPjOtppgKF3r1KgZwupVFOYFvEgb+R5TlW6NV6eGU1bNUVVz23i+6/pNv0V6L0sBRU2BxJUNUqHtM1QjtAHfbWwH6y8xFJagKHVWFiOX+Xm/8A5y55XFfL/LsfBK2GamTbde5XlPOAraeqnd5j7zb9Kdhmm/YBYEE6C5UAAm9uGsyONo0yilA3WAhWUnQ7+0p0I+XTvmNzZeVrNTnY8qIU4aeOnlLfZ2Oy6A3B3r9xKNGrLoAT3Fb++nvOyNVJA6tLncMxzHwCx76tNcbGniVYaHynS8osNs7F2zCnbu6z7H/qdRVr0/3lNgOJFiPYmaS6/caZ8mb+1veImeejiFcXBuJ1vLS9apXivI3hJDJivFeF4Rw4QhBxcxxXhJVSBjkZKAQkRGIDtCEIBeOKAgOEISAQhCAQivC8AvCEIBCEiYTwzKHaWGuXXn2hL2ebEUMxDctD4Sm56KwOJw11y8VJ9D+lpf8A7Otu9VVfBu1ke9SnfhU+ZR4jXyPOdXwH5h001/7mV6Q7PajXB1AJDKwJBBF9x5gj6TPN/Tn16vX1npDtejTRQxuSdy63tw0nLZOMqYpwVpFKAvmdsoL6aZQO+YfZu16dZVo4o3Zu0tQWu5U2INuOvnNHU6a4TCpkRg2UWGup8gJHPbbOu59NHisyXAOZfceMp66XMqdm9MKmMrrTo4clCbu7EhUTmdPaabEoBa4sY4maeWlTsJ7ti4MVKy5h2U/MN92h7P8Ayt6GcqSXIA3kgAcyZp6OGp4emRftNqzeAJ8hobXmnjz2ufzb5Of69LG7EE6E6eA335k39hFdbZVOoOpvoCx1vrv1v5icadWnxNmvquul7H7gmPFOvZtuylgdwB4H6+s6OONV0/zMYbrfJSfIDxDNZjblmRf8vPnmK2PUr4yoiIFpqS5LDXW5AsNxIt6+E1+E2jlxuIckAU6a02Y7lFusPHhceh5zr0MpVbPiaiANiahq5fmWmxsh8LfQec3Mv1aWz4+Vbb2fWpYn8Mli5VWBF7do6W17jNbsDo/Tw69Y5zVCutQk3Hgd4lxtXZtMY81BqUw6JfS2d3due8L/AHCQqvmqCmPhQZm7zwETEnxP5W/Trghbjdv7xyvKnFOAAbFnbcoK/Uz27VxYRDxtYH+ZzuT/ADunkpUSB1j2zhd/BRyEsmVnMaxRusRWRr60yBlqeY0B+s9+Ax61VuCL8RfWefaNTMGO8ASjohqdQMt7MAfGYbzz3HR4vJfla8mK85o5KgneRukrw6upXgTIkxXg6neKRvCBfRxQkqnHEI4BGDFCBKEJGBKEIQCEIQC8d4oSAQhCAQhCASJMIoWOd8IoZsp4q30nCSpvY3Ei/FdfHZKC3vbefrYTxbU2Atarh2qU81KnVLuMwsyZDYHXdnCXHK8sVUlB3uB7/wD2e7BMCCHa7BiNbXtwnPfWmckveu1TZ2FqLkNGmV/hNOnYeAtpM7tPoNhqr9ZkvbXLmIJt/Pv9Zpfw6bwLeBIHtI4nEmmuc2KjfzEfkSc+MrgKgp1vwtPDmktPtMMur8jm+Yecuq4J1MpNtbSqLV6ynrdQAt+F90qtobbxQQdkDONCNfpLyWp1qftttkqGfrPlpkG3Nju/Xyi2p0hGfqlsMr2ao1ggOU6r/Ee1x5CUh2yKWDTK2UKFzu9r1GIuxAG/U2A/ltume2XtulUr56jflhiwW5Zy43E2Fzw7tJvnmZxy6/lrr6jhylOjdrkrepc2LMxOl/bWVO1NsUwyUySzVE0sCc5tqRfcBb34yvp9JjiH6qlhajrTA7ZCoiH5Sb3v4SlqK+FQ1cQxqYmoQgJa7G57KKBu1O4c5OvJJ/X2Y8Xb/L0sOjmFq1Wek6jq2rmpVN/jv8CDmLaEmbtW1a1lCpkC6evduEq+jWynoUyWJ6yv+YxtYoSOyuUcgLW7p6drVgqOwvoLALfM4ymw9fK0tnvOVlrn5evjMvVzO9Q2OapUa/NU7APonvK3ZVXOHq/xuQPBdB73ktq1RRwzkH4EyA8TYb/GefCOKODVj8tO/mdZol5sS/WYlKY1WnmqN3vwv5mdNvYjJTWmvx1Oz395kejVH8tq7/FVPWeCD4f1854C/X1nqfJT/LTvPGQQq9G2Gd/5SPSVdFL0kbiCB4g8PpL3pFanhCvMAeJMqMNTP4Y23quYeI1Erqd9L5vLKs0Oklec1e4B5i8d5k7k7wvIXheBO8c53hA0kIQvJBHFCA45GOA4RCOAQtCF4DvHIx3gOEiIQlKEjCECEIQkRQikJO8BFCELXBrdB3VFPuL/AKz04arTuyAjMrHMNL3Oo9iJ4MHXCJbm/wBhFsSpRqPUJCmqajfEAWyCwW1+HZMw3/Zj8tXQA4WlL0kxSrTNP5msRbuMtWdVU924CZXHg1al+ABEotFfiUuAeFp6nwvXYUsDqqm4BsVKmxPjbKZFKRy2PAe8jSz0w+UaMmVh53v/AJzmmNfipvP5MfXwouVJLtm7K5yQbE6nkBy7zNJ0e2OF1IF215angJxw2FU1Nw1NzpNps2koAHMe8a1ajOZl2NSng6W4AE3Lcyd5/wA5CZ/o+hxmLGLqKRQpsTTJHYqPuzDnbgfGa18Jhuy9UK9tQGN0H+3cfOUu3ultFQaadplF8qjlpYcJbPq9Rr3Of9bNSMoUHXWxOuh1095Qbeq9WUp3JaozNa40RVJZiPEqPF7y3wNYdStSobFKYL7yFZV7VjbUDXhMVtXFPVxNSsQQiUadFAVsczXeqRzFwg/2zpjk57UPTGv+SlPjUqoPG51+k59JGLCjhF31GRTbggF29hFten1uOw1HetMtVf8ApRfuSPWGzB+IxtWufgojqlPJiLufTL6yfqz3bYxHVUMiaM9kUchukNk4LKFS25bk8yZ5KznEYnTVKZ05XmioUwg13mWGU6aYi7JSHPMR4aCTwFP8vL3Ee0qMfWNXFFuCmw8pe4YWWVn1Lz0tFUclA9pO85Bvqw9CYZpjXfm9kdc0LzlmhmhLreE53hA1V45EQvHRMQijkghCF4BHeKEBxyMd4DhFeKBKEQigO8IoQHeBihCwvCEJAIXheKB58XWKkAciZlsbUYOWViGDNZgSCNefrNFjx218GHtM9WS7Gc2/7MrPbQbP6SCoi02YivqCTbK44Ed/d3T2UFYatxnz7EpZweQGvES3wnSRkUCqRlDZes105FgPrIk6i3jWOhJ04me+hhbNmI0IsZ12XhQ6K1wb2YEbrSxroFEJlZPHbONN+sTVCb24rPbgsYoXNwAsD48pY2ve+48JU4vDdS/WAXS+7gh5yZSxDF7JxNQKlNypqA/Ef3a8zy3jSWmF6M4LDUSrqrta7O1tDbeOXjPHhsRWY2UZi25Qe0Zp8Fsxcv5oD1GvcHVKY4eO7fNcZ6x8m5J7dcDTthkAF1NM6H5lO7NfuK3PfMrtSpnqA6duoTodCq7v+KiaHpRWVMOy9nNoiC116wkZLqd4uPOZLF1Bna26mh9Tpc99rzrz8c0/1QvWCvicSd6oKKcwScz+vY9J0C/hcMtL/wAlS7vzzvqw97eQnDBIHTM3wCoazfzkOwRfPIPIGWuAwbO/X1Rd2+BTuUc4S6bGwPVrmYdptbcp6sVUtp3zvu1MrsS4J85JGLoL+a/c7D/kZoaHwygzAYip/qP9TLzDN2b85TKXjY6n+oxZpzdu039RgHmWvrtxf4x0zR3nLNANCzteE5Zo4GwhFCEprHIAx3gShFeMGAxC8UJIcIoxAIQgIBCEIBCEUJO8LxQkJO8UIGARXgYoHkxg7SeJEoqydvxvNBiVuU/q+4Ep8SlnHj95z7/szv1S4tNx77SuxdG9N+5s01GLwW/TjceIMqsXhSA2mhW/j3Scf24y8k9LH9lu0MTerRzZqNJQwU71ZiQFU8iAxt3T6MtXrB9piv2aYXJQqVLfvKuUHmqKPuzTVCtle/Pf4843/Y8frMejJI1qYZSCLgidwQZF1lGsVnR+iMLUfUktqupsicfufITZ0HDDMbC4AB8tPrv75k8VTJFxow3EbwZY7O2hemRoHpqTlJ3kDTd8s6fDqWfi5fNiz3FV0yxaficPRHxGo1Urc2yKhNyOPbI85ntpv1dGo/FifYafUz09JMSHxuGbNdhRxV9LXDOLNbhcqZUdKMSVpqoNj2SPEm4m7GLTZ2BCUqaPqURSy7/zLa38DLFmt3mcMNUdaYL6mxObcSCdAe+1o8MxY5uEtEulYm0raw1lhXlZi3AEDI4prYup3tf1AP3l3hj+X6zO7Qf/APW/fl/tEv8ADn8vylIlWdZdn7nI+kM08WGe71P9T7T05plb7deL/GOoaPNOOaSDSOr9dQ0JzvFJOt1CK8d4WMGORjgOEUBAleMGRvC8CV45GECUJG8YMCUUIo6HeEjeEB3jkYoSleBMUV4BCEUJRdLkePp/lp5a2GzHQcW8td09ZgDbdKaz29VsRyAixHCUe16jWNNE3XuxNgol6TKPGkO2RGu1R7aC4FzLTOfrHzdkk/1pOi1EU8HTW1rqWPeXJY/WWLoDDCIFRVG5VAHgBOwW5nPfdWnqcQw7lRY7joDwNp6SZYvglamEPAXB45juPreVAzKSrbwbf9y2sXPtTG5fSTrPFiMOGB4Egi4JFwd48DPfec2Ezl5etfrDbceqmKpZqdqSU2phx8OZiuh5fDx754dtVEevTUnsdal+WUMDb2m/xNBXUqQCDpMZtvorULCpSOYK4bq2Otgb9lvsfWdOPN31XPvw2e4sH2zhqugqdhW1srZbjgWtadl2vhgLColv6hKzD0xTGQKEt8lrWvvnRqVNxdkU24lQfr4TplYLIYunUGZGDDmCDKnHsWIA56+EiMQWbRQAugtYG3iOErdoY0gEa+tvLdJ6SqTarD8Yw/o/tEvKeJFsoPCZbHYgmoGsAWXW3E35+E9lGoQAcxFweJ13TOU/aGHe1Rxzcz13lYjnrDc8p7s0y19dPjvp2DRhpwDSQaQ069AaE5BoQnr6DCIRyy4jBijgEcUBAcIRQHeO8UIDhFCBO8V4hCAXheKEBwvFCEwXhCKAEwhFCTMUIjADOWxNldrrnBB7QRTvA3Zj4jd3H07L+n1l426Z71ZOM9yWyhZNDrYbybTjO+E+MeMyz7rPV5GhcAoeeUG/cO1+sp6uzxmd0XtO7ue9RlUD6+ktanzjh1S6f+0lS3/7fvO38ZZyuP8AKy9jOZodZJ7R0rOBuzTzmcWpy8duL2ddgZNVE84k1cyjTiOI2fTezFVLLqCVU29ZA7Kw2IRl6sJUXRsnY8CLbwdfeepHMhT0rpb5gwPeMpP1Alpqq3MY7aPRypRuadS4sbBh+kx+LFUEq5HlcT6rthjlM+a7Zc5z4TXO9fOs7jP3jM4lrse7T9ZwZmvoT6nSTnRUF5s5alhlNyTxEsEfSc1QWiG6RqNfHXcNGGnESSyrbruGhICEHX//2Q==" />
  <Card.Body>
    <Card.Title>Ho</Card.Title>
    <Card.Text>
      Bạn cảm thấy ngứa ở cổ họng, đau họng và ho khan!
    </Card.Text>
    <Button variant="primary">Chọn triệu chứng</Button>
  </Card.Body>
</Card>
        </Row>
        <Row className="px-4 my-5">
        <Stack gap={2} className="col-md-5 mx-auto">
  <Button variant="secondary">Xem kết quả chẩn đoán</Button>
  <Button variant="outline-secondary">Chọn lại</Button>
</Stack>
        </Row>
        </div>
        </div>
        </main>
    )
 }