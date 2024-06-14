import {Caveat,Shadows_Into_Light} from "next/font/google";

export const caveat_init =Caveat({
    subsets:['latin'],
    display:'swap',
    variable:'--font-ceveat',
    weight:'400'
})


export const shadows_Into_Light_init =Shadows_Into_Light({
    subsets:['latin'],
    display:'swap',
    variable:'--font-shadows',
    weight:'400'

})
export const ceveat = caveat_init.className;
export const shadows = shadows_Into_Light_init.className;