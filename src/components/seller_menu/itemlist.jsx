import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import ShopProductCard from "../../sections/ProductCard";

const products = {
  name: "test",
  cover:
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQHEBMTEREVFhIXFhYVFRYWEhYWGBgVFRUYFxUWFxgZICggGRolGxcVIjEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0NDg8PFSsZFRk3Ky03KzcrKy0rKzctKystKysrLS0rNy03KysrKysrKysrKy0rKysrKystKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwMEBQYIAgH/xABIEAACAQIEAgYFBgsGBwEAAAAAAQIDEQQFEiEGMQcTQVFhcSIygZGhUmJyscHRFCMkM0JEgrLS4fAXQ1OEkqIWVXOTo8LxFf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwCYgAVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfG7Fnlub0M119RWp1ND0z0SUtL8beT38GUeJ8G8xwOKop2dShVgn3OVOSXsOe+DuIKnD9SnXpW9VRnB8pwdrxf2PsaCyOlwYHhji3D8SR/FStVSvKlL1ku1r5S8V7bGeCAAAAAAAAAAAAAAAAAAAAAAAAAAAERccdJlahi3h8DKMYUpOFWo4xm5zXOMVJWjGLUlfm2ny7ZbqNpO3Ozt522OTsNed9d9bvqb5673bfjqCx0H0e8Y/8AE0JwqqKxFOzenZTg9taXY09mvFPtstwOZeHM6qZFiYV6dtcHaUb2Uk1acH4Ncn5PsJjwfSnl9aK6ydWlK28Z0KkrP6UFKL94LG7g0LHdLeAw/wCb6+tLuhRcfjVcfhc0fiTpHxeeXhS/JaL5qEr1ZL51TbT5Rs/FgxJHGvGmFyKjWpuqpYl05qFKHpSU5Raj1ltqavbeVvC5z9haUlFJJuyS5fa2ith4RXnu7vvfb5lxGSUk3K1k1bVtv3pXuRVPC4+tldWFWjOVOrBtxdufY12ppptNPvJe4J6UIZzVjh8XCNKvOSjSlG/Vzb5QabbhO+yvs/B7ER1Uqjvq27k/jyv7izqUbT9G6vZp79ne+x8gldXAgjgXpIqcNqVDGqrXoq7hJNTqQ8FrktUH3N3T8OUqcJ8bYTivUsPOSqRV5UqkVGaXfZNprxTZUbGAAAAAAAAAAAAAAAAAAAAAAACji6yw1Oc3soxlJvwjFv7Dk6FeVb0qjvOT1OT/AEnLdt+N2yfemPOJZXlrhBtTxElRuvkOLlV98U4/tECL4BYuIVFPndSta67V49jPbaX6TfhsvqLPS14/X7UerPusFV3WUfVVv65FPUfInyUgKmrY9UYOrKMIRlKcnaMYpylJ+EVu34Gb4U4NxPEzvTXV0L2lWmnp25qC51H4Ky72iZuGuF8LwlTcqaWtRfWYiq1q09vpPaEPBWXffmERRW6PcyoU4z/BdV1dxhVpupDwlG/PwjqNfxNCpg5ONWnOnNc41IShJeySTt4kk8W9LCpXpZclJ7p4iS9FPl+Kg/W+k9vCRrPDXCWN40m61SpKNKTvPEVtU9ff1SdnP4RXftYg1eO7v2+dv5P+bPVCc8HWhVoTlTqK9pwemUXZq6802tiZcw6Lctw+HvOrVpaI3niJVkr27Zqa0L2JERZtRpYOrOOHrutRXKpKk6d+9KLbuvnbX7l2huHBnSbVyiq6WY1J1qErOFW2qdPn61t5xdvFqy53JDyjpGy7NZaYYlQldJKtGVLVd2Wly2d+69/AgmtltWlCFepQrQotXU3Qn1ckntLW1ZLn5ota35TBJNNbX7mvZ7wOqwc/8OdIWM4ehClqhWowSjGFSNpRgkkoxnHdJW7VIkbIOlLB5naNZvD1O1T9Kn7KqSSX0lEqN6B4pVFWipRkpRe6lFpprvTWzPYAAAAAAAAAAAAAAAMPxTn0eH6HWOOqcnppwvbVKze73slbd2YETdN2cfhWNp4dNaKEFJpLdVKu7u7ctCp7J9pHkPS5NErwwOA4mk5YqlbES9aanKE5O1rtxdpPzTKWM6I6VdXw2MnF87VoRqLy1Q0te5hUYdXc8cjbsy6OsxyzdUVWjv6VGan5XhK0/cma3VjKjLRWpuMl+jOMoSXnGSTQFu1sy+4fxmHwFZTxeFeIpr9DrNCv3yVvxi+a2l335FvClGp6s7Pul/V0XWDyHE46M5UaE6sadnN01qte/Yt3yeyTAlhdKuBjQ1RhWU0ko0OqUX3JKSbgorz5dl9iOc94gxvHFVU9MnFv8XhqSbhtycvlNfKlsvA1tOza7Vs123XNPuK+FxdTBz10qs6c+WqnOUHa6drxa2ult4ICVuD+i2GC01cw01anONBb0o92t/3j8PV+lzNn4s44w3C0dEnrr29ChBpWX6Ot8qcfPdpbJkSUekHMadOVP8K1atlOVODqRXzZJLfxab3MFltOlWrL8Kq1IU5NyqVIw6ybb3bs3vJ/Kd++zAzWZZrjePcSqemVSV706EFalTjy1b7bds5O+/ZsiS+DOjKjlOmri9NeurNQ36mm+y0X68l8qSttsk9yvwzn+UZVh3HCYmjTglqnr1Qqyts5SU0pzl5J+CtY0njDpNq5tqo4LVRocnU9WtUXh/hR8vSfeuQEgcZ9JFDhzVSprr8StnTi/Qg7f3s+z6Ku/LmQbnGa1M4ryrVVBTl2U6cacUuxJLn5u78Sxsoqy7D5EI9rc+iJ65AXmVZziMolfDYipTfaoN6W32uDbi/ambrlXS5i8NZV6NOstt1elPxb0px90UR59ZU1X5pL3ATXl/S3g8RtVp16L73BTj7HBuX+02XL+LsFmNurxdJt8lKWh37rTs7nOP4NJ8uRSqUHFbsK6uBFHQlxBVxLq4OrPVCnBTo33lGOq04X7Y+lGy7N1yJXCAAAAAAAWuOrzoL0Kervfd7FuBdGg9LeGqdTQrxu6VKUlVST9FVNKjU27E42f079jNi//ZmucI/FHyrmvXxcZ0oyjJOMot7NNWaaIqH6UlNXTTXst9xl8uzWrg/UqO3c917ny9ha8Q8OzyiUqmHTeH3en1nDwl4fOXt8cbh8eu3b4r3/AH2AkTLeMpKyqwuu+P3P7zPuvheIoaKsKdVfJqQUmvFKSuvNEXUa2q1n/wDPAyOHr6bb2fPy8f6t7S6Mzm3Rbg8XvQlUoPmkn1kE+/TPdeySM/wtkkOGaCo0227uc5tWc5uyu7clZJJdyMVl3EcqFlU9OPf+kvv8nubRQxEcXFSg00+1fb3MDHZ9wtg+It8Th4upb87D0KnhecfW8pXRH2c9EE6d3g8WpL5FeOl/9yF0/wDSiVGnHkzxLEaea9q+4ogPF8BZjheeElNd9OdOa9iUr/Axk+HsbB2eAxd+38lqv4qNmdFSxEXyl9/xKMq3zviyCBqXBuYV+WBq/taIfCck0XlLo8zKf6rp861H+Mm6NW/aVoTuBBdXo7zOH6qpeEa9F/XJFrLgjMY88DV9jg/qkdBxZ7jKwHONbhzG4V+ngcSvFYepJe+KaXvLGvCeF/OQnD6cJR+tHUMZlRy1IDlJYqPevej5+Eqbsnd9yd2dSzw1OTu6VNvvcIv7D3DTT9WMV5JIDmzK8sxeMemjhcRNPuoz0r9pqy95tuWdF2MxtnXnToR7m+tn/og7f7iZcRiVRi5TkoxSu5Sdkl3tvZGMp4+pmm2Fh6D54iomqfnTj61Z+WmPzuwDF8HcL0OH8U40NUpxoy62pJ7t1Zw6uNl6KVqVR25q/ibsWmXYCOAi1FuUpPVOcrapzaScpW25JJJWSSSSSRdhAAAAAAAAGIzLLZ1pucWnfsezX3mLqYapS505e6/1G1gmDTJVdHPY1XP8owtW81Lqp87xScX5w+6xLcoKfNJ+auWeIyfD4r18PSl50oP7Biud62LjgpOPWK99mr779pd4fOd7KpGXtVya6vBGX1neWAw7f/SS+ooS6Pcsl+oUfc19TAi+hnMJc3b6veZTLeJlgJ6oVPpRadpLua+3mb2ujzLF+oUfdL7y5ocFZfQd45fhr+NCEv3kwNbodKWW1FaeIcZdq6qrJX8JRi17T1PpLyp/rf8A4av8JtsuG8HLngsM/wDL0v4T1Hh/CR5YTDr/AC9P+Eo01cb5bi/VxkP2lOH78UVaWbYfEfm8TRl5VYP4XNqq8M4Kt62Bw0vPDUn/AOpY4jgPLcR62Aw/7NNQ/csBj6NXuLynVLN9F+Xxv1dOrSv/AIeJqpe5ya+BbS6LaC9TGYyHlVpv66YGdhWKkalzXv7NnH1c0xq85Qf1JHz+zif/ADXF+1p/1/IDZlMPEKK3kvejVZdGHWetmeLfsp/bFnldEeFlbrMTip+c6cf3YX+IGUzHi/CYDaVeMpfJp3qSv46bpe2xip8XTxv5mMaUflVHrla+9oRelbdrl7Owy2X9G2X4HlQlN/PrVJfC9vgZ7C5HhsH+bw1KL71Tjf32uBp+CwLxtSNR9ZiJp3jKraUYvscYWVOPPmlfxN9pNuK1W1WV7cr9p7WwCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/Z",
  price: 20000,
};

function ItemList() {
  return (
    <Container maxWidth="xl" sx={{ mt: 3 }}>
      <Typography variant="h4">Products</Typography>
      <CssBaseline />
      {/*filter */}
      <Grid container spacing={3} sx={{ mt: 3 }}>
        {/* // map here */}
        <Grid item xs={12} sm={6} md={2}>
          <ShopProductCard product={products} />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <ShopProductCard product={products} />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <ShopProductCard product={products} />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <ShopProductCard product={products} />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <ShopProductCard product={products} />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <ShopProductCard product={products} />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <ShopProductCard product={products} />
        </Grid>
        {/* // map here */}
      </Grid>
    </Container>
  );
}

export default ItemList;
