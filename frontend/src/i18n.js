import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          Books: "Books",
          "Search...": "Search...",
          "Unknown Author": "Unknown Author",
          "No category": "No category",
          "Category: {{category}}": "Category: {{category}}",
          "Sort by": "Sort by",
          "Title (A-Z)": "Title (A-Z)",
          "Title (Z-A)": "Title (Z-A)",
          "Author (A-Z)": "Author (A-Z)",
          "Author (Z-A)": "Author (Z-A)",
          "Rating (Low to High)": "Rating (Low to High)",
          "Rating (High to Low)": "Rating (High to Low)",
          "Year (Oldest to Newest)": "Year (Oldest to Newest)",
          "Year (Newest to Oldest)": "Year (Newest to Oldest)",
          "Back to List": "Back to List",
          "Published Year": "Published Year",
          "ISBN-13": "ISBN-13",
          "ISBN-10": "ISBN-10",
          "Categories": "Categories",
          "Average Rating": "Average Rating",
          "Number of Pages": "Number of Pages",
          "Ratings Count": "Ratings Count",
          "Description": "Description",
          "No description available": "No description available",
          "Hello": "Hello",
          "Logout": "Logout",
          "Login": "Login",
          "Register": "Register",
          "Search by title": "Search by title",
          "Search by author": "Search by author",
          "Search by category": "Search by category",
          "Search by ISBN13": "Search by ISBN13",
          "Search": "Search",
          "User Profile": "User Profile",
          "Username": "Username",
          "Email": "Email",
          "Phone Number": "Phone Number",
          "Personal Address": "Personal Address",
          "Billing Address": "Billing Address",
          "Gender": "Gender",
          "Male": "Male",
          "Female": "Female",
          "Other": "Other",
          "Marketing Consent": "Marketing Consent",
          "Update Profile": "Update Profile",
          "Favorite Books": "Favorite Books",
          "No books found": "No books found",
          "Loading...": "Loading...",
          "Failed to update profile": "Failed to update profile",
          "Profile updated successfully": "Profile updated successfully",
          "Price:": "Price:",
          "Not in stock": "Not in stock",
          "Add to cart": "Add to cart",
          "Add to Favorites": "Add to Favorites",
          "Remove from Favorites": "Remove from Favorites",
          "Book cover for {{title}}": "Book cover for {{title}}",
          "No rating available": "No rating available",
          "CZK": "CZK", // Přidáno pro překlad měny
          // Přidáno pro BookComments
          Comments: "Comments",
          "No comments yet.": "No comments yet.",
          "Add a comment": "Add a comment",
          Submit: "Submit",
          "Please log in to add a comment.": "Please log in to add a comment.",
          "Failed to fetch comments": "Failed to fetch comments",
          "Failed to add comment": "Failed to add comment",
          // Přidáno pro BookDetail a BookRating
          "Error: Unable to fetch book details.": "Error: Unable to fetch book details.",
          "Network error: {{message}}": "Network error: {{message}}",
          "No ISBN provided": "No ISBN provided",
          "Untitled": "Untitled",
          "Author(s):": "Author(s):",
          "Published Year:": "Published Year:",
          "Category:": "Category:",
          "Your Rating": "Your Rating",
          "You rated: {{rating}}": "You rated: {{rating}}",
          "You haven't rated this book yet": "You haven't rated this book yet",
          "{{count}} votes": "{{count}} votes",
          "Failed to fetch user rating": "Failed to fetch user rating",
          "Error fetching user rating: {{error}}": "Error fetching user rating: {{error}}",
          "Submit Rating": "Submit Rating",
          "Failed to submit rating: {{error}}": "Failed to submit rating: {{error}}",
          //Cart
          "Close": "Close",
          "Basket": "Basket",
          "Your basket is empty": "Your basket is empty",
          "Not priced": "Not priced",
          "Delete": "Delete",
          "Total: {{totalPrice}} Kč": "Total: {{totalPrice}} Kč",
          "Accept order": "Accept order",
          "Title": "Title",
          "Author": "Author",
          "ISBN13": "ISBN13",
          "Category": "Category",
          "Hide Categories": "Hide Categories",
          "Show Categories": "Show Categories",
          "Error logging out": "Error logging out",
          "Error searching for books": "Error searching for books",
          //Order confirm
          "Order Confirmation": "Order Confirmation",
          "Full Name": "Full Name",
          "Phone": "Phone",
          "Billing Same as Personal": "Billing Same as Personal",
          "Age": "Age",
          "Payment Method": "Payment Method",
          "Select Payment Method": "Select Payment Method",
          "Cash on Delivery (+50 Kč)": "Cash on Delivery (+50 Kč)",
          "Bank Transfer": "Bank Transfer",
          "Online Card Payment (+1%)": "Online Card Payment (+1%)",
          "Place Order": "Place Order",
          "Please fill in the following required fields: {{fields}}": "Please fill in the following required fields: {{fields}}",
          "Login or password is incorrect": "Login or password is incorrect",
          "Password": "Password",
          "Successfully registered": "Successfully registered",
          "Registration failed": "Registration failed",
          "Billing Same As Personal": "Billing Same As Personal",
          "Select gender": "Select gender",
          "Favorite Genres": "Favorite Genres",
          "Reference Source": "Reference Source",
          "Full Name is required.": "Full Name is required.",
          "Email is required.": "Email is required.",
          "Personal Address is required.": "Personal Address is required.",
          "Billing Address is required if it is different from Personal Address.": "Billing Address is required if it is different from Personal Address.",
          "You must agree to Marketing Consent.": "You must agree to Marketing Consent.",
          "Age is required.": "Age is required.",
          "Profile updated successfully!": "Profile updated successfully!"
        },
      },
      cs: {
        translation: {
          Books: "Knihy",
          "Search...": "Hledat...",
          "Unknown Author": "Neznámý autor",
          "No category": "Žádná kategorie",
          "Category: {{category}}": "Kategorie: {{category}}",
          "Sort by": "Seřadit podle",
          "Title (A-Z)": "Název (A-Z)",
          "Title (Z-A)": "Název (Z-A)",
          "Author (A-Z)": "Autor (A-Z)",
          "Author (Z-A)": "Autor (Z-A)",
          "Rating (Low to High)": "Hodnocení (od nejnižšího)",
          "Rating (High to Low)": "Hodnocení (od nejvyššího)",
          "Year (Oldest to Newest)": "Rok (od nejstaršího)",
          "Year (Newest to Oldest)": "Rok (od nejnovějšího)",
          "Back to List": "Zpět na seznam",
          "Published Year": "Rok vydání",
          "ISBN-13": "ISBN-13",
          "ISBN-10": "ISBN-10",
          "Categories": "Kategorie",
          "Average Rating": "Průměrné hodnocení",
          "Number of Pages": "Počet stránek",
          "Ratings Count": "Počet hodnocení",
          "Description": "Popis",
          "No description available": "Popis není k dispozici",
          "Hello": "Ahoj",
          "Logout": "Odhlásit se",
          "Login": "Přihlásit se",
          "Register": "Registrovat se",
          "Search by title": "Hledat podle názvu",
          "Search by author": "Hledat podle autora",
          "Search by category": "Hledat podle kategorie",
          "Search by ISBN13": "Hledat podle ISBN13",
          "Search": "Hledat",
          "User Profile": "Uživatelský profil",
          "Username": "Uživatelské jméno",
          "Email": "E-mail",
          "Phone Number": "Telefonní číslo",
          "Personal Address": "Osobní adresa",
          "Billing Address": "Fakturační adresa",
          "Gender": "Pohlaví",
          "Male": "Muž",
          "Female": "Žena",
          "Other": "Jiné",
          "Marketing Consent": "Marketingový souhlas",
          "Update Profile": "Aktualizovat profil",
          "Favorite Books": "Oblíbené knihy",
          "No books found": "Žádné knihy nenalezeny",
          "Loading...": "Načítání...",
          "Failed to update profile": "Aktualizace profilu selhala",
          "Profile updated successfully": "Profil byl úspěšně aktualizován",
          "Price:": "Cena:",
          "Not in stock": "Není skladem",
          "Add to cart": "Přidat do košíku",
          "Add to Favorites": "Přidat k oblíbeným",
          "Remove from Favorites": "Odebrat z oblíbených",
          "Book cover for {{title}}": "Obálka knihy {{title}}",
          "No rating available": "Hodnocení není k dispozici",
          "CZK": "Kč", // Přidáno pro překlad měny
          // Přidáno pro BookComments
          Comments: "Komentáře",
          "No comments yet.": "Zatím žádné komentáře.",
          "Add a comment": "Přidat komentář",
          Submit: "Odeslat",
          "Please log in to add a comment.": "Pro přidání komentáře se prosím přihlaste.",
          "Failed to fetch comments": "Nepodařilo se načíst komentáře",
          "Failed to add comment": "Nepodařilo se přidat komentář",
          "Error: Unable to fetch book details.": "Chyba: Nelze načíst podrobnosti knihy.",
          "Network error: {{message}}": "Chyba sítě: {{message}}",
          "No ISBN provided": "ISBN není zadáno",
          "Untitled": "Bez názvu",
          "Author(s):": "Autor(ři):",
          "Published Year:": "Rok vydání:",
          "Category:": "Kategorie:",
          "Your Rating": "Vaše hodnocení",
          "You rated: {{rating}}": "Ohodnotili jste: {{rating}}",
          "You haven't rated this book yet": "Tuto knihu jste zatím nehodnotili",
          "{{count}} votes": "{{count}} hlasů",
          "Failed to fetch user rating": "Nepodařilo se načíst uživatelské hodnocení",
          "Error fetching user rating: {{error}}": "Chyba při načítání uživatelského hodnocení: {{error}}",
          "Submit Rating": "Odeslat hodnocení",
          "Failed to submit rating: {{error}}": "Nepodařilo se odeslat hodnocení: {{error}}",
          //Cart
          "Close": "Zavřít",
          "Basket": "Košík",
          "Your basket is empty": "Váš košík je prázdný",
          "Not priced": "Bez ceny",
          "Delete": "Odstranit",
          "Total: {{totalPrice}} Kč": "Celkem: {{totalPrice}} Kč",
          "Accept order": "Přijmout objednávku",
          "Title": "Název",
          "Author": "Autor",
          "ISBN13": "ISBN13",
          "Category": "Kategorie",
          "Hide Categories": "Skrýt kategorie",
          "Show Categories": "Zobrazit kategorie",
          "Error logging out": "Chyba při odhlašování",
          "Error searching for books": "Chyba při vyhledávání knih",
          //Order Confirm
          "Order Confirmation": "Potvrzení objednávky",
          "Full Name": "Celé jméno",
          "Phone": "Telefon",
          "Billing Same as Personal": "Fakturační adresa je stejná jako bydliště",
          "Age": "Věk",
          "Payment Method": "Způsob platby",
          "Select Payment Method": "Vyberte způsob platby",
          "Cash on Delivery (+50 Kč)": "Dobírka (+50 Kč)",
          "Bank Transfer": "Bankovní převod",
          "Online Card Payment (+1%)": "Platba kartou online (+1%)",
          "Place Order": "Odeslat objednávku",
          "Please fill in the following required fields: {{fields}}": "Vyplňte prosím následující povinná pole: {{fields}}",
          "Login or password is incorrect": "Přihlašovací jméno nebo heslo je nesprávné",
          "Password": "Heslo",
          "Successfully registered": "Úspěšně zaregistrováno",
          "Registration failed": "Registrace se nezdařila",
          "Billing Same As Personal": "Fakturační adresa je stejná jako osobní",
          "Select gender": "Vyberte pohlaví",
          "Favorite Genres": "Oblíbené žánry",
          "Reference Source": "Referenční zdroj",
          "Full Name is required.": "Celé jméno je povinné.",
          "Email is required.": "E-mail je povinný.",
          "Personal Address is required.": "Osobní adresa je povinná.",
          "Billing Address is required if it is different from Personal Address.": "Fakturační adresa je povinná, pokud se liší od osobní adresy.",
          "You must agree to Marketing Consent.": "Musíte souhlasit se zasíláním marketingových materiálů.",
          "Age is required.": "Věk je povinný.",
          "Profile updated successfully!": "Profil byl úspěšně aktualizován!"
        },
      },
    },
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;