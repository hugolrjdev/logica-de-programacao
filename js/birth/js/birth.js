/*

Em uma determinada cidade do interior "X" existe um índice de natalidade de n% ao ano, emquanto a cidade vizinha
"Y" tem 30% mais. Dado a natalidade da cidade "X". Construa um algoritmo para calcular e mostrar o valor estimado
de natalidade da cidade "Y".

*/

const formNat = document.querySelector( '#form-nat' );

formNat.addEventListener('submit', ( event ) => {
    event.preventDefault();
    
    const natX = document.querySelector( '[name=cidadeX]' ).value;
    const natY = natX * 1.30;
    const fieldY = document.querySelector( '[name=cidadeY]' );
    fieldY.value = natY;

    if( natX == "" ){
        alert('campo cidadeX esta em branco, por favor insira numero da natalidade da cidade X')
    }

});
