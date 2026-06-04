# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.




### React
For each operation, there is a wrapper hook that can be used to call the operation.

Here are all of the hooks that get generated:
```ts
import { useCreateBranch, useUpdateBranch, useAssignBranchAdmin, useAssignPrincipal, useCreateClass, useCreateSection, useRemoveSection, useCreateUser, useClaimUserFirebaseUid, useCreateParent } from '@dataconnect/generated/react';
// The types of these hooks are available in react/index.d.ts

const { data, isPending, isSuccess, isError, error } = useCreateBranch(createBranchVars);

const { data, isPending, isSuccess, isError, error } = useUpdateBranch(updateBranchVars);

const { data, isPending, isSuccess, isError, error } = useAssignBranchAdmin(assignBranchAdminVars);

const { data, isPending, isSuccess, isError, error } = useAssignPrincipal(assignPrincipalVars);

const { data, isPending, isSuccess, isError, error } = useCreateClass(createClassVars);

const { data, isPending, isSuccess, isError, error } = useCreateSection(createSectionVars);

const { data, isPending, isSuccess, isError, error } = useRemoveSection(removeSectionVars);

const { data, isPending, isSuccess, isError, error } = useCreateUser(createUserVars);

const { data, isPending, isSuccess, isError, error } = useClaimUserFirebaseUid(claimUserFirebaseUidVars);

const { data, isPending, isSuccess, isError, error } = useCreateParent(createParentVars);

```

Here's an example from a different generated SDK:

```ts
import { useListAllMovies } from '@dataconnect/generated/react';

function MyComponent() {
  const { isLoading, data, error } = useListAllMovies();
  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div> An Error Occurred: {error} </div>
  }
}

// App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyComponent from './my-component';

function App() {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
    <MyComponent />
  </QueryClientProvider>
}
```



## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createBranch, updateBranch, assignBranchAdmin, assignPrincipal, createClass, createSection, removeSection, createUser, claimUserFirebaseUid, createParent } from '@dataconnect/generated';


// Operation CreateBranch:  For variables, look at type CreateBranchVars in ../index.d.ts
const { data } = await CreateBranch(dataConnect, createBranchVars);

// Operation UpdateBranch:  For variables, look at type UpdateBranchVars in ../index.d.ts
const { data } = await UpdateBranch(dataConnect, updateBranchVars);

// Operation AssignBranchAdmin:  For variables, look at type AssignBranchAdminVars in ../index.d.ts
const { data } = await AssignBranchAdmin(dataConnect, assignBranchAdminVars);

// Operation AssignPrincipal:  For variables, look at type AssignPrincipalVars in ../index.d.ts
const { data } = await AssignPrincipal(dataConnect, assignPrincipalVars);

// Operation CreateClass:  For variables, look at type CreateClassVars in ../index.d.ts
const { data } = await CreateClass(dataConnect, createClassVars);

// Operation CreateSection:  For variables, look at type CreateSectionVars in ../index.d.ts
const { data } = await CreateSection(dataConnect, createSectionVars);

// Operation RemoveSection:  For variables, look at type RemoveSectionVars in ../index.d.ts
const { data } = await RemoveSection(dataConnect, removeSectionVars);

// Operation CreateUser:  For variables, look at type CreateUserVars in ../index.d.ts
const { data } = await CreateUser(dataConnect, createUserVars);

// Operation ClaimUserFirebaseUID:  For variables, look at type ClaimUserFirebaseUidVars in ../index.d.ts
const { data } = await ClaimUserFirebaseUid(dataConnect, claimUserFirebaseUidVars);

// Operation CreateParent:  For variables, look at type CreateParentVars in ../index.d.ts
const { data } = await CreateParent(dataConnect, createParentVars);


```