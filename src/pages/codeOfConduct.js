import React from "react"
import "../styles/codeOfConduct.scss"
import SocialBar from "../components/SocialBar"

export default () => {
    return (
        <React.Fragment>
        <article>
            <h3>Codigo de Conducta</h3>
            <p className="codeText">
            En asaditojs apoyamos la diversidad e inclusión en cada uno de nuestros eventos, ya sean charlas o workshops. 
            Como comunidad en IT queremos brindar un espacio libre de discriminación.
            </p>
            <p className="codeText">
            Te pedimos por favor que nos ayudes a mantener un código de conducta a través de un diálogo amable y respetuoso sin discriminar,
            excluir ni acosar a ninguna persona que se encuentre en el evento. 
            </p>
            <p className="codeText">
            En caso de presenciar un acto en el que no se están respetando lo antes mencionado,
            contactate con cualquiera de nosotrxs.
            </p>
            <p className="codeText">
            Queremos aclararte que ante conductas de acoso, discriminación o agresión en caso de que no cesen inmediatamente se procederá con la sanción,
            expulsión y/o revisión de la permanencia en futuros eventos de la comunidad.
            </p>
        </article>
        <section className="footer">
        <SocialBar />
        </section>
        </React.Fragment>
    )
}