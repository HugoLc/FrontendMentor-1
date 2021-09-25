import InfoCard from '../js/info-card.js'


const infoCardParagrafo = `
    Página criada atendendo as especificações do desafio proposto 
    no site Frontend Mentor. Praticado posicionamento de elementos,
    CSS grid e flex, edição de propriedades de uma imagem e responsividade.
`

var infoCard = new InfoCard(infoCardParagrafo);
console.log(infoCard);
document.addEventListener('click', () => {
    if(infoCard) {infoCard.excluirInfoCard();}
    infoCard = null;    
});