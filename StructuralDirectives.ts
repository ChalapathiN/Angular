<h2>User Status</h2>

@if (isLoggedIn) {
  <p>Welcome back, {{ userName }}!</p>
} @else {
  <p>Please log in to continue.</p>
}


@if (role === 'admin') {
  <p>Welcome Admin!</p>
} @else if (role === 'editor') {
  <p>Welcome Editor!</p>
} @else {
  <p>Welcome Guest!</p>
}

<ul>
  @for (product of products; track product.id) {
    <li>{{ product.name }} - ${{ product.price }}</li>
  }
</ul>

<ul>
  @for (item of items; track item.id) {
    <li>{{ item.name }}</li>
  } @empty {
    <li>No items available</li>
  }
</ul>

<h2>Payment Status</h2>

@switch (status) {
  @case ('pending') {
    <p>Payment is pending...</p>
  }
  @case ('success') {
    <p>Payment successful ✅</p>
  }
  @case ('failed') {
    <p>Payment failed ❌</p>
  }
  @default {
    <p>Status unknown</p>
  }
}
