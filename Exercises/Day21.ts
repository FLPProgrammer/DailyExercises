class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

class Cart {
    myCart: Product[] = [];

    addProduct(product: Product) {
        this.myCart.push(product);
        console.log(`${product.name} foi adicionado no carrinho`)
    }

    removeProduct(name: string): void {
        const prevSize = this.myCart.length;

        this.myCart = this.myCart.filter((product) => product.name !== name);

        this.myCart.length < prevSize ? console.log(`❌ Produto(s) "${name}" removido(s) do carrinho`) : console.log(`⚠️ Produto "${name}" não encontrado no carrinho.`);
    }

    updateProductPrice(productName: string, newPrice: number): void {
        let found = false;

        this.myCart.forEach((product) => {
            if(product.name === productName) {
                const prevPrice = product.price;
                product.price = newPrice;
                found = true;
                console.log(`💰 ${productName} atualizado: R$ ${prevPrice.toFixed(2)} → R$ ${newPrice.toFixed(2)}`)
                }
        });

        if(!found) {
            console.log(`⚠️ Produto "${productName}" não encontrado.`)
        }
    }

    updateProductName(oldName: string, newName: string): void {
        let found = false;

        this.myCart.forEach((product) => {
            if(product.name === oldName) {
                product.name = newName;
                found = true;
                console.log(`📝 Produto renomeado: "${oldName}" → "${newName}"`);
            }
        });

        if(!found) {
            console.log(`⚠️ Produto "${oldName}" não encontrado.`);
        }
    }

    sumTotal(): string {
        const total = this.myCart.reduce((sum, product) => sum += product.price, 0);
        return `Total da compra: R$ ${total.toFixed(2)}`;
    }

    listProducts(): void {
        console.log('\n📦 Produtos no carrinho:')

        if(this.myCart.length === 0) {
            console.log('   (Carrinho vazio)');
            return;
        }

        this.myCart.forEach((product, index) => {
            console.log(
                `   ${index + 1}. ${product.name} - R$ ${product.price.toFixed(2)}`
            );
        });
    }
 
    getCartSize(): number {
        return this.myCart.length;
    }

    clearCart(): void {
        this.myCart = [];
        console.log('🗑️ Carrinho esvaziado!');
    }

    getAveragePrice(): number {
        if(this.myCart.length === 0) return 0;
        
        const total = this.myCart.reduce((sum, product) => sum + product.price, 0);
        return total / this.myCart.length;
    }

    findProductByName(name: string): Product | undefined {
        return this.myCart.find((product) => product.name === name);
    }

    hasProduct(name: string): boolean {
        return this.myCart.some((product) => product.name === name);
    }

    getTotalQuantity(): number {
        return this.myCart.length;
    }

    getExpensiveProduct(): Product | undefined {
        return this.myCart.reduce((expensive, product) => 
            product.price > expensive.price ? product : expensive
        );
    }

    getCheaperProduct(): Product | undefined {
        return this.myCart.reduce((cheaper, product) => 
            product.price < cheaper.price ? product : cheaper
        );
    }

    applyDiscount(percentage: number): string {
        const total = this.myCart.reduce((sum, product) => sum + product.price, 0);
        const discount = total * (percentage / 100);
        const finalPrice = total - discount;
        return `Total com ${percentage}% desconto: R$ ${finalPrice.toFixed(2)}`;
    }

    filterByPrice(minPrice: number, maxPrice: number): Product[] {
        return this.myCart.filter((product) => product.price >= minPrice && product.price <= maxPrice);
    }

    sortByPrice(order: 'asc' | 'desc' = 'asc'): Product[] {
        return [...this.myCart].sort((a, b) => 
            order === 'asc' ? a.price - b.price : b.price - a.price
        );
    }

    sortByName(): Product[] {
        return [...this.myCart].sort((a, b) => a.name.localeCompare(b.name));
    }

    duplicateProduct(name: string): void {
        const product = this.findProductByName(name);
        if(product) {
            this.addProduct(new Product(product.name, product.price));
        } else {
            console.log(`⚠️ Produto "${name}" não encontrado.`);
        }
    }

    getCartSummary(): void {
        console.log('\n═══════════════════════════════════════');
        console.log('📋 RESUMO DO CARRINHO');
        console.log('═══════════════════════════════════════');
        this.listProducts();
        console.log('───────────────────────────────────────');
        console.log(`Total de itens: ${this.getTotalQuantity()}`);
        console.log(`Preço médio: R$ ${this.getAveragePrice().toFixed(2)}`);
        console.log(this.sumTotal());
        console.log('═══════════════════════════════════════\n');
    }
}

/*==============================================================*/


class User {
    email: string;
    password: string;
    name: string;
 
    constructor(email: string, password: string, name: string) {
        this.email = email;
        this.password = password;
        this.name = name;
    }
}
 
class LoginSystem {
    private users: User[] = [];
    private loggedInUser: User | null = null;
 
    registerUser(email: string, password: string, name: string): void {
        const userExists = this.users.some((user) => user.email === email);
 
        if(userExists) {
            console.log(`❌ Email "${email}" já está registrado.`);
            return;
        }
 
        if(password.length < 6) {
            console.log('❌ A senha deve ter no mínimo 6 caracteres.');
            return;
        }
 
        const newUser = new User(email, password, name);
        this.users.push(newUser);
        console.log(`✅ Usuário "${name}" registrado com sucesso!`);
    }
 
    login(email: string, password: string): boolean {
        const user = this.users.find((user) => user.email === email);
 
        if(!user) {
            console.log(`❌ Email "${email}" não encontrado.`);
            return false;
        }
 
        if(user.password !== password) {
            console.log('❌ Senha incorreta.');
            return false;
        }
 
        this.loggedInUser = user;
        console.log(`✅ Login realizado com sucesso! Bem-vindo, ${user.name}!`);
        return true;
    }
 
    logout(): void {
        if(!this.loggedInUser) {
            console.log('❌ Nenhum usuário logado.');
            return;
        }
 
        const userName = this.loggedInUser.name;
        this.loggedInUser = null;
        console.log(`✅ ${userName} fez logout com sucesso.`);
    }
 
    isLoggedIn(): boolean {
        return this.loggedInUser !== null;
    }
 
    getCurrentUser(): User | null {
        return this.loggedInUser;
    }
 
    getProfile(): void {
        if(!this.loggedInUser) {
            console.log('❌ Nenhum usuário logado.');
            return;
        }
 
        console.log('\n═══════════════════════════════════════');
        console.log('👤 PERFIL DO USUÁRIO');
        console.log('═══════════════════════════════════════');
        console.log(`Nome: ${this.loggedInUser.name}`);
        console.log(`Email: ${this.loggedInUser.email}`);
        console.log('═══════════════════════════════════════\n');
    }
 
    listAllUsers(): void {
        if(this.users.length === 0) {
            console.log('❌ Nenhum usuário registrado.');
            return;
        }
 
        console.log('\n📋 LISTA DE USUÁRIOS REGISTRADOS:');
        this.users.forEach((user, index) => {
            console.log(`   ${index + 1}. ${user.name} (${user.email})`);
        });
        console.log();
    }
 
    changePassword(email: string, oldPassword: string, newPassword: string): void {
        const user = this.users.find((user) => user.email === email);
 
        if(!user) {
            console.log(`❌ Email "${email}" não encontrado.`);
            return;
        }
 
        if(user.password !== oldPassword) {
            console.log('❌ Senha atual incorreta.');
            return;
        }
 
        if(newPassword.length < 6) {
            console.log('❌ A nova senha deve ter no mínimo 6 caracteres.');
            return;
        }
 
        user.password = newPassword;
        console.log(`✅ Senha alterada com sucesso!`);
    }
 
    deleteUser(email: string, password: string): void {
        const userIndex = this.users.findIndex((user) => user.email === email);
 
        if(userIndex === -1) {
            console.log(`❌ Email "${email}" não encontrado.`);
            return;
        }
 
        const user = this.users[userIndex];
 
        if(user.password !== password) {
            console.log('❌ Senha incorreta. Não foi possível deletar a conta.');
            return;
        }
 
        if(this.loggedInUser?.email === email) {
            this.loggedInUser = null;
        }
 
        this.users.splice(userIndex, 1);
        console.log(`✅ Conta de ${user.name} deletada com sucesso.`);
    }
 
    updateProfile(email: string, password: string, newName: string): void {
        const user = this.users.find((user) => user.email === email);
 
        if(!user) {
            console.log(`❌ Email "${email}" não encontrado.`);
            return;
        }
 
        if(user.password !== password) {
            console.log('❌ Senha incorreta.');
            return;
        }
 
        user.name = newName;
        console.log(`✅ Nome atualizado para "${newName}".`);
    }
}

/*No dia de hoje desenvolvimos um sistema de carrinho com todas as funções necessárias para operar um carrinho com qualidade e eficiência e 
um sistema de login dinâmico que simula como seria na realidade */