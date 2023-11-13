<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>carrinho</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
    <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    
<body>
document.addEventListener('DOMContentLoaded', function () {
            const cart = []; // Vetor para armazenar os itens do carrinho

            // Função para adicionar itens ao carrinho
            window.addToCart = function (id, name, price) {
                const item = { id, name, price };
                cart.push(item);
                updateCart();
            };

            // Função para atualizar a exibição do carrinho
            function updateCart() {
                const cartItemsList = document.querySelector('.cart-items');
                const cartTotal = document.getElementById('cart-total');

                cartItemsList.innerHTML = '';
                let total = 0;

                cart.forEach(item => {
                    const listItem = document.createElement('li');
                    listItem.classList.add('cart-item');
                    listItem.innerHTML = `
                        <span>${item.name}</span>
                        <span>R$ ${item.price.toFixed(2)}</span>
                    `;
                    cartItemsList.appendChild(listItem);

                    total += item.price;
                });

                cartTotal.textContent = total.toFixed(2);
            }
        });
        </body>
        </head>
        </html>