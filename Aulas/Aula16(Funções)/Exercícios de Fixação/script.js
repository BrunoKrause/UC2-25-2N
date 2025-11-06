


const determinaMonstro = (par1, par2, par3, par4) =>{
    const temPeleGelada = par1
    const transformaComLuaCheia = par2
    const brilhaAoSol = par3
    const temSedeDeSangue = par4
    const vampiro = (temPeleGelada || brilhaAoSol || temSedeDeSangue || (transformaComLuaCheia === false))
    const lobisomem = transformaComLuaCheia || (temPeleGelada===false) || (temSedeDeSangue===false) || (brilhaAoSol===false)
    const humano = temPeleGelada === false || transformaComLuaCheia === false || brilhaAoSol === false || temSedeDeSangue === false

    if(vampiro){
        return'Vampiro'
    } else if(lobisomem){
        return'Lobisomem'
    } else if(humano){
        return 'Humano'
    } else{return 'Baranga'}
}
console.log(determinaMonstro(true, true, true, true))