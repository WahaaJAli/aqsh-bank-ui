const Practice = (): JSX.Element => {

    const enum Prices {low = 50, medium = 100, high = 150}
    let myPrice:Prices = Prices.high
    // console.log(myPrice)

    /* Type Casting */
    function TaxCalculator(income: number, taxYear = 2022): number {
        if (taxYear < 2022) 
            return income * 1.2

        return income * 1.3
    }

    /* Object (readonly key-value-pair) */
    type Employee = {
        readonly id: number,
        name: string,
        retire: (date: Date) => void
    }

    /* Type Alias */
    let employee: Employee = {
        id: 1,
        name: "WAHAAJ",
        retire: (date: Date) => {
            console.log(date.toISOString().replace(/[^0-9A-Z]|T/gi, '').substring(0, 14))
        }
    }

    let date1 = new Date()
    // console.log(employee.retire(date1))


    type Draggable = {
        drag: () => void
    }

    type Resizable ={
        resize: () => void
    }

    /* Type Alias (Intersaction &) */
    type UIWidget = Draggable & Resizable

    let textBox: UIWidget = {
        drag: () => {},
        resize: () => {}
    }

    // console.log(textBox)

    /* Type Alias (Union |) */
    type Quantity = 50 | 100
    type Metric = 'cm' | 'inch'
    let quantity: Quantity = 50


    /* Optional Property Access Operator [?.] */
    type Customer = {
        birthday?: Date
    }

    let getCustomer = (id: Number): Customer | null | undefined => {
        return id === 0 ? null : { birthday: new Date() }
    }

    let customer = getCustomer(1)
    // if(customer !== null && customer !== undefined) (Omit this line and use ?.)
    // console.log(customer?.birthday?.getFullYear())
    
    
    /* Optional Element Access Operator [?.] (when dealing with arrays) */
    let array: string[] = ['first index value', 'second index value']
    // if(customer !== null && customer !== undefined)
        // console.log(array?.[0]) // it will return undefined otherwise
    
    /* Optional Call Access Operator */
    // if(customer !== null && customer !== undefined)
    let log = (message:string): any => console.log(message)
    // log?.('your message here')

    /* Nullish Coaelscing Operator */
    let speed: Number | null = 10
    let ride = {
        speed: speed ?? 21    // if Speed is undefined or null use 21 as default value
    }
    // console.log(ride)

    /* Type Assertion */
    // let phone = document.getElementsByClassName('input') as HTMLInputElement
    // let phone = <HTMLInputElement> document.getElementsByClassName('input')
    // console.log(phone.value)'
    
    /* Class */
    class Ride {
        private static _activeRides: number = 0;

        /* Index Signature Property */
        // [RideNumber: string]: string;
        
        constructor(readonly id: number, driver: string, passenger: string) {}
        
        start(): any { Ride._activeRides++ }
        stop(): any { Ride._activeRides-- }
        
        
        static get activeRides(): number {
            return Ride._activeRides
        }
    }

    let ride1 = new Ride(0, 'awais', 'wahaaj')
    // ride1.start();

    let ride2 = new Ride(1, 'akhtar', 'maaz')
    // ride2.start();

    // console.log(Ride.activeRides)


    /* Inheritance */
    abstract class Person {
        constructor(public firstName: string, public lastName: string) {}

        get fullName(): string  {
            return `${this.firstName} ${this.lastName}`
        }

        walk() {
            console.log("Walking")
        }

        abstract get job(): string
    }
    class Student extends Person {
        constructor(public id: number, firstName: string, lastName: string) {
            super(firstName, lastName)
        }

        takingTest() {
            console.log(`${super.fullName} is taking a test`)
        }

        get job() {
            return `${super.fullName}'s job is to Study`
        }
    }
    class Teacher extends Person {
        override get fullName(): string {
            return `Professor ${super.fullName}`
        }

        get job() {
            return `${this.fullName}'s job is to Teach`
        }
    }
    class Principal extends Person {
        override get fullName(): string {
            return `Principal ${super.fullName}`
        }

        get job() {
            return `${this.fullName}'s job is to run an institute`
        }
    }



    let personNames = (people: Person[]): void => {
        for(let person of people) {
            // console.log(person.job)
        }
    }

    personNames([
        new Principal('Noor', 'Jahan'),
        new Teacher('Faraz', 'Ahmad'),
        new Student(1, 'Wahaaj', 'Ali'),
        new Student(2, 'Waqas', 'Ahmad'),
        new Student(3, 'Maaz', 'Ahmad'),
        new Student(4, 'Musanif', 'Ali'),
    ])



    /* Interfaces */
    /* abstract class Calendar {
        constructor(public name: string) {}

        abstract addEvent():void
        abstract removeEvent(): void
    } */

    type Event = {
        name: string,
        date: Date,
        note: string,
        email?: string
    }
    interface Calendar {
        name: string
        addEvent(e: Event): void
        removeEvent(e: Event | string): void
    }
    
    interface CloudCalendar extends Calendar {
        sync(): void
    }

    class GoogleCalendar implements CloudCalendar {
        constructor(public name: string) {}

        private static _events: Event[] = []

        addEvent(e: Event): void {
            let duplicateItem = GoogleCalendar._events.find(event => {
                return event.name.toLowerCase() === e.name.toLowerCase()
            })

            if(duplicateItem) {
                e.name = `${e.name} copy`
                GoogleCalendar._events.push(e)
                console.log(`Duplicate Entry! Event added: ${e.name}`)
            } else {
                GoogleCalendar._events.push(e)
            }

        }

        removeEvent(eventName: string): void {
            let targetIndex = GoogleCalendar._events.findIndex(event => {
                return event.name.toLowerCase() === eventName.toLowerCase()
            })

            GoogleCalendar._events.splice(targetIndex, 1)
        }

        sync(): void {
            throw new Error("Method not implemented.")
        }

        get events() {
            return GoogleCalendar._events.map(event => {
                return `${event.name} Event Details:
                        Date: ${event.date}
                        Note: ${event.note}`
            }).join('\n')
        }
    }

    let googleCalendar1 = new GoogleCalendar('Calendar 2023')
    let d1 = new Date()
    d1.setMonth(d1.getMonth() + 1)
    
    let d2 = new Date()
    d2.setDate(d2.getDate() + 3)
    
    let e1: Event = {
        name: 'Attend Birthday',
        date: d1,
        note: 'Make a call on 03166442123 for flowers.',
        email: 'wahajahmad@gmail.com'
    }
    
    let e2: Event = {
        name: 'Call Home',
        date: d2,
        note: 'Make a home call for hospitality.'
    }

    googleCalendar1.addEvent(e1)
    googleCalendar1.addEvent(e2)
    // googleCalendar1.addEvent(e2)
    googleCalendar1.removeEvent('Call Home')
    // console.log(googleCalendar1.events)

    /* Generics */
    /* class Numeric_KeyValuePair {
        constructor(public key: number, public value: string) {}
    }

    class String_KeyValuePair {
        constructor(public key: string, public value: string) {}
    }

    let pair = new Numeric_KeyValuePair(1, "WahaaJ") */


    class KeyValuePair<K, V> {
        constructor(public key: K, public Value: V) {}

        static wrapKeyValuePair<T>(value: T) { return [value]}
    }

    let pair1 = new KeyValuePair<number, string>(1, "WahaaJ")
    let pair2 = new KeyValuePair("Name", "WahaaJ")
    let arrKeyValuePair = KeyValuePair.wrapKeyValuePair(pair1)


    /* Generic Interfaces */
    interface Result<D> {
        data: D | null,
        error: string | null
    }

    // function fetch<T extends {title: string} | {username: string}>(url: string): Result<T> {
    function fetch<T>(url: string): Result<T> {
        return { data: null, error: null}
    }

    interface User {
        username: string
    }

    interface Product {
        title: string,
        category: string
    }

    let result1 = fetch<User>('https://colorlib.com/username')
    result1.data?.username
    let result2 = fetch<Product>('https://colorlib.com/products')
    result2.data?.title

    /* Generic Inheritance */
    interface Product {
        title: string,
        category: string,
        price: number
    }
    class Store<S> {
        protected _objects: S[] = []

        add(obj: S[]) { this._objects.push(...obj) }

        /* Use of 'keyof' Operator & 'unknown'
        keyOf S => 'title' | 'category' | 'price' [keyOf S going to return keys of Product object] */
        findByProperty(property: keyof S, value: unknown): S | undefined  {
            return this._objects.find(obj => obj[property] === value)
        }
    }

    /* Pass on the Generic Type Parameter */
    class CompressibleStore<CT extends {title: string, category: string}> extends Store<CT> {
        compress(): string[] { return this._objects.map(obj => obj.title)}
    }


    /* Restricting the Generic Type Parameter */
    class SearchableStore<T extends {title: string}> extends Store<T> {
        find(name: string): T | undefined {
            return this._objects.find(obj => obj.title.toLowerCase() === name.toLowerCase())
        }
    }

    /* Fix the Generic Type Parameter */
    class ProductStore extends Store<Product> {
        filterByCategory(category: string): Product[] {
            return this._objects.filter(obj => obj.category.toLowerCase() === category.toLowerCase())
        }
        
        filterByPrice(price: number, sortBy?: string): Product[] {

            switch (sortBy) {
                case "greater":
                return this._objects.filter(obj => obj.price >= price)
                
                case "lower":
                return this._objects.filter(obj => obj.price <= price)

                default: 
                return this._objects
            }
        }
    }

    let testObjArray = [
        {title: 'Audi A8',           category: "Car",    price: 199_00_000}, 
        {title: 'Samsung S21 Ultra', category: "Mobile", price: 247_000}, 
        {title: 'Samsung S23 Ultra', category: "Mobile", price: 520_000}, 
        {title: 'HP Envy 15',        category: "Laptop", price: 175_000}, 
        {title: 'HP Spectre',        category: "Laptop", price: 285_000}, 
        {title: 'Sonata',            category: "car",    price: 99_00_000}
    ]

    let C_S = new CompressibleStore()
    C_S.add(testObjArray)
    
    let S_S = new SearchableStore()
    S_S.add(testObjArray)
    
    let P_S1 = new ProductStore()
    P_S1.add(testObjArray)
    
    let P_S2 = new Store<Product>()
    P_S2.add(testObjArray)
    
    
    let compressedProducts: string[] = C_S.compress()
    let searchableProducts = S_S.find('samsung S23 ultra')
    let categoryFilteredProducts1: Product[] = P_S1.filterByCategory("mobile")
    let categoryFilteredProducts2: Product[] = P_S1.filterByPrice(510_000, "lower")
    let propertyFilteredProducts1 = P_S2.findByProperty("title", "Audi A8")
    let propertyFilteredProducts2 = P_S2.findByProperty("category", "Laptop")

    // console.log(compressedProducts)
    // console.log(searchableProducts)
    // console.log(categoryFilteredProducts1)
    // console.log(categoryFilteredProducts2)
    // console.log(propertyFilteredProducts1)
    // console.log(propertyFilteredProducts2)


    /* Type Mapping */
    interface Products {
        name: string,
        price: number,
        category: string
    }

    type Readonly<T> = {
        readonly [K in keyof T]: T[K]
    }
    
    type Optional<T> = {
        [K in keyof T]?: T[K]
    }
    
    type Nullable<T> = {
        [K in keyof T]: T[K] | null
    }

    let sample1: Readonly<Products> = {name: 'tie', price: 99, category: 'wardrobe'}
    let sample2: Partial<Products> = {name: 'coat'}
    let sample3: Nullable<Products> = {name: null, price: 0, category: null}
    // sample1.name = 'wahaj'



    /* Decorators */
    type ComponentOptions = {
        selector: string
    }

    function Component(options: ComponentOptions) {
        return (Constructor: Function) => {
            Component.prototype.options = options
            console.log(`${options} from Component Decorator`)
        }
    }

    // @Component({ selector: '#my-profile' })
    class ProfileComponent {
    }


    /* Accessor Decorator */

    function Capitalize(target: any, methodName: string, descriptor: PropertyDescriptor) {
        const original = descriptor.get

        descriptor.get = function() { 
            
            let result = original?.call(this)
            return (typeof result == 'string') ? result.toUpperCase() : result
        }
    }
    class Person1 {
        constructor(public firstName: string, public lastName: string) {}

        // @Capitalize
        get fullName() {
            return `${this.firstName} ${this.lastName}`
        }
    }

    let p1 = new Person1('wahaaj', 'ali');
    // console.log(p1.fullName)


    /* Property Decorator */
    function Username() {
        return (target: any, propertyName: string) => {
            let value: string

            const descriptor: PropertyDescriptor = {
                get() { return value },

                set(newValue: string) {

                    if(true) {
                        value = newValue
                        throw new Error(`${propertyName} should be atleast charaters long`)
                    }
                }
            }
            Object.defineProperty(target, propertyName, descriptor)
        }
    }


    function Password(length: number) {
        return (target: any, propertyName: string) => {
            let value: string

            const descriptor: PropertyDescriptor = {
                get() { return value },

                set(newValue: string) {
                    if(newValue.length < length)
                        throw new Error(`${propertyName} should be atleast ${length} charaters long`)
                    value = newValue
                }
            }
            Object.defineProperty(target, propertyName, descriptor)
        }
    }
    class User {
        // @Username
        username: string = ''
        // @Password(4)
        password: string = ''

        constructor(username: string, password: string) {
            this.username = username
            this.password = password
        }
    }

    let u1 = new User('wahaj@123', 'Abcd0000')
    // console.log(u1.password)


    /* Property Decorator */
    type WatchedParameter = {
        methodName: string,
        parameterIndex: number
    }

    const WatchedParamters: WatchedParameter[] = []

    function Watched() {
        return (target: any, methodName: string, parameterIndex: number) => {
            WatchedParamters.push({
                methodName,
                parameterIndex
            })
        }

    }
    class Vehicle {
        // move(@Watched speed: number) {}
        move( speed: number ) {}
    }

    let v1 = new Vehicle();
    // console.log(v1.move)


    

    return (
        <>
        </>
    )
}

export default Practice
