# networking-helper

***

Tools for the calculation and organization of ipv4 addresses (Project under development). 

Herramientas para el cálculo y organización de direcciones ipv4 (Proyecto en desarrollo).

*** 

## Guía de uso. 🚀

_Instala vía npm._

```
npm install networking-helper --save
```

***

_Encontrar dirección de red y broadcast, dada una dirección ip y su máscara de red (prefijo)._

La dirección ipv4 puede ser de tipo ***String*** con un formato de tipo:

```
"192.192.192.192"
```
También podría ser un ***array*** con los siguientes formatos

```
["192","192","192","192"]
```
ó
```
[192,192,192,192]
```

En el caso de la máscara de red solo debemos agregar el prefijo.

Para consultar la dirección ipv4 podremos realizar la siguiente forma.

```javascript
import { networkFinder } from 'networking-helper';

const AddressToFind = {
    address:[192,192,192,192],
    mask:24
}

const ipv4Info = networkFinder(AddressToFind);

console.log(ipv4Info);


/*
Output

{
  address: [ 192, 192, 192, 192 ],  
  network: [ 192, 192, 192, 0 ],    
  broadcast: [ 192, 192, 192, 255 ],
  netmask: [ 255, 255, 255, 0 ],    
  prefix: 24,
  hosts: 256,
  utilHosts: 254
}

*/
```

*** 

_Encontrar una máscara de red desde su prefijo_

***

```javascript

import { maskPrefixToIp } from 'networking-helper';

const arrayNetMask = maskPrefixToIp(24);

console.log(arrayNetMask);

/*
Output
[255,255,255,0]
*/

```

Proyecto aún en desarrollo.