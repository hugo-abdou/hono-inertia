# Redirects

Inertia expects redirects after mutating requests. `hono-inertia` provides
helpers for internal and external redirects.

## Internal Redirects

```ts
app.post("/users", async (c) => {
  await createUser(c);

  return inertia.redirect(c, "/users");
});
```

For Inertia requests, the helper defaults to `303`. For non-Inertia requests,
it delegates to Hono's redirect response.

You can pass `302` or `303` explicitly:

```ts
return inertia.redirect(c, "/users", 303);
```

## Back Redirects

Use `back()` when you want Laravel-style redirect-back behavior:

```ts
app.post("/profile", async (c) => {
  await updateProfile(c);

  return inertia.back(c);
});
```

`back()` redirects to the `Referer` header. If the header is missing, it uses
`/` by default:

```ts
return inertia.back(c, "/settings");
```

## External Redirects

Use `location()` for external redirects:

```ts
app.get("/billing", (c) => {
  return inertia.location(c, "https://billing.example.com");
});
```

This returns:

- status `409`
- header `X-Inertia-Location`
- header `Vary: X-Inertia`

## Validation

Inertia validation normally works through redirects and shared error props.
This package does not impose a validation library. Add validation errors to
shared props or session-backed flash data in your application layer.
